import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }

    // Call Ollama API (running locally)
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3',
        prompt: `You are a helpful expert in over-the-counter (OTC) medicine available in the Philippines. Only suggest medicines available in local drugstores like Mercury Drug or Watsons. Now answer the user's question: ${message}`,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get AI response');
    }

    const data = await response.json();
    return NextResponse.json({ response: data.response });
  } catch (error) {
    console.error('Error calling Ollama API:', error);
    return NextResponse.json({ error: 'Failed to get AI response' }, { status: 500 });
  }
}