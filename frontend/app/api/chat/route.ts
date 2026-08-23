import { resume } from '@/data/resume';

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

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return Response.json({ error: 'GROQ_API_KEY not configured' }, { status: 500 });
    }

    const messages = [
      ...(history || [])
        .filter((m: { role: string; text: string }) => m.role === 'user' || m.role === 'assistant')
        .map((m: { role: string; text: string }) => ({
          role: m.role as 'user' | 'assistant',
          content: m.text,
        })),
      { role: 'user' as const, content: message },
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        messages: [
          { role: 'system', content: buildContext() },
          ...messages,
        ],
        max_tokens: 1024,
        temperature: 0.7,
        include_reasoning: false,
        stream: true,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Groq API error:', error);
      return Response.json({ error: 'Failed to generate response' }, { status: response.status });
    }

    const encoder = new TextEncoder();
    const reader = response.body?.getReader();
    
    if (!reader) {
      return Response.json({ error: 'No response body' }, { status: 500 });
    }

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          let buffer = '';
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += new TextDecoder().decode(value);
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = line.slice(6);
                if (data === '[DONE]') continue;
                try {
                  const json = JSON.parse(data);
                  const text = json.choices?.[0]?.delta?.content;
                  if (text) {
                    controller.enqueue(encoder.encode(text));
                  }
                } catch (e) {
                  // Skip invalid JSON
                }
              }
            }
          }
          controller.close();
        } catch (err) {
          controller.error(err);
        }
      },
    });

    return new Response(readableStream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (err) {
    console.error('Chat API error:', err);
    return Response.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
