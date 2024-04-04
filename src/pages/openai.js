import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    // Only allow POST requests
    return res.status(405).end('Method Not Allowed');
  }

  const { prompt } = req.body;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'gpt-3.5-turbo', // Update to the model you're using
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0,
        presence_penalty: 0,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    res.status(500).json({ message: 'Error processing your request' });
  }
}
