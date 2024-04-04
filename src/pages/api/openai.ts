import OpenAI from 'openai';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { prompt } = req.body;

  const openai = new OpenAI({ apiKey: process.env.OPENAI_SECRET_KEY });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (completion.choices[0]) {
      res.status(200).json(completion.choices[0].message.content);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error processing your request' });
  }
}
