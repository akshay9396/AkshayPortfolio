import { resume } from '@/data/resume';

export async function POST(request: Request) {
  try {
    const { jobDescription } = await request.json();

    if (!jobDescription || typeof jobDescription !== 'string') {
      return Response.json({ error: 'Job description is required' }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return Response.json({ error: 'GROQ_API_KEY not configured' }, { status: 500 });
    }

    const allSkills = Object.values(resume.skills).flat() as string[];
    const experience = resume.experience
      .map(e => `${e.role} at ${e.company} (${e.period})`)
      .join(', ');

    const prompt = `You are an expert career coach. Analyze how well this candidate's profile matches the job description.

CANDIDATE PROFILE:
Name: ${resume.name}
Current Role: ${resume.experience[0]?.role ?? 'Software Developer'}
Experience: ${experience}
Skills: ${allSkills.join(', ')}

JOB DESCRIPTION:
${jobDescription}

Respond ONLY with a valid JSON object in exactly this format (no markdown, no extra text):
{
  "score": <number 0-100>,
  "summary": "<2 sentence summary of the match>",
  "matched": ["<skill1>", "<skill2>", "<skill3>"],
  "missing": ["<skill1>", "<skill2>", "<skill3>"],
  "verdict": "<one of: Strong Match | Good Match | Partial Match | Weak Match>"
}`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        messages: [
          { role: 'user', content: prompt },
        ],
        max_tokens: 1024,
        temperature: 0.3,
        include_reasoning: false,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Groq API error:', error);
      return Response.json({ error: 'Failed to analyze job description' }, { status: response.status });
    }

    const data = await response.json();
    const text = data.choices[0]?.message?.content?.trim();

    if (!text) {
      throw new Error('No content in response');
    }

    // Strip markdown code fences if present
    const cleaned = text.replace(/^```json\n?/, '').replace(/\n?```$/, '').trim();
    const parsed = JSON.parse(cleaned);

    return Response.json(parsed);
  } catch (err) {
    console.error('Analyze API error:', err);
    return Response.json({ error: 'Failed to analyze job description' }, { status: 500 });
  }
}
