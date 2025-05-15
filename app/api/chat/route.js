import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }

    // Prepare prompt
    const prompt = `You are a helpful expert in over-the-counter (OTC) medicine available in the Philippines. Only suggest medicines available in local drugstores like Mercury Drug or Watsons. Now answer the user's question: ${message}`;

    // Call Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192', // or try 'llama3-70b-8192'
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7
      }),
    });

    if (!response.ok) {
      throw new Error('Groq API request failed');
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || 'Sorry, no response.';

    return NextResponse.json({ response: reply });
  } catch (error) {
    console.error('Error using Groq API:', error);
    return NextResponse.json({ error: 'Failed to get AI response' }, { status: 500 });
  }
}
