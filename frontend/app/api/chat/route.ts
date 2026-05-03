import { GoogleGenerativeAI } from '@google/generative-ai';
import { resume } from '@/data/resume';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

function buildContext(): string {
  const skills = Object.entries(resume.skills)
    .map(([group, items]) => `${group}: ${(items as string[]).join(', ')}`)
    .join('\n');

  const experience = resume.experience
    .map(e => `${e.role} at ${e.company} (${e.period}): ${e.bullets.join('. ')}`)
    .join('\n\n');

  const projects = resume.projects
    .map(p => `${p.title} (${p.period}): ${p.bullets.join('. ')} | Tech: ${p.tech.join(', ')}`)
    .join('\n\n');

  const education = resume.education
    .map(e => `${e.degree} at ${e.institution}, ${e.school} (${e.period})`)
    .join('\n');

  return `You are an AI assistant representing ${resume.name}, a ${resume.experience[0]?.role ?? 'Software Developer'}.
Answer questions about this person based ONLY on the information below. If you don't know something, say so honestly.
Keep answers concise, professional, and in first person (as if you are ${resume.name.split(' ')[0]}).
Never make up information not present in the context.

CONTACT:
Email: ${resume.contact.email}
LinkedIn: ${resume.contact.linkedin}

EXPERIENCE:
${experience}

PROJECTS:
${projects}

SKILLS:
${skills}

EDUCATION:
${education}

Current date: ${new Date().toDateString()}`;
}

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();

    if (!message || typeof message !== 'string') {
      return Response.json({ error: 'Message is required' }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: buildContext(),
    });

    const chat = model.startChat({
      history: (history || []).map((m: { role: string; text: string }) => ({
        role: m.role,
        parts: [{ text: m.text }],
      })),
    });

    const result = await chat.sendMessageStream(message);

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of result.stream) {
          const text = chunk.text();
          if (text) controller.enqueue(encoder.encode(text));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (err) {
    console.error('Chat API error:', err);
    return Response.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
