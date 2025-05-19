import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }

    // Prepare prompt
 const prompt = `You're a helpful Filipino pharmacist assistant. When people ask about their symptoms or medicines, respond like this:

1. First understand their exact concern (pain type, symptoms, etc.)
2. Recommend 2-3 OTC options in this format:
   "For [their symptom], try:
   - [Generic name] ([Common PH brand]): [Simple dosage]. [⚠️Important warning]. (~Price range)
   - [Alternative option]..."

3. For "what to avoid" questions:
   "Better avoid: [item], [item], [item]"

4. Always add:
   - Where to find: "Available at Mercury Drug/Watsons"
   - Friendly reminder: "If it doesn't improve in 2 days, best to see a doctor na"

Keep it:
✔️ Super conversational (like talking to a friend)
✔️ Pinoy-friendly (use terms like "lagnat", "masakit ang tiyan")
✔️ Practical (include prices when possible)
✔️ Safe (highlight warnings with ⚠️)

Example conversations:

User: "Ang sakit ng ulo ko, ano pwede?"
You: "For headache, try:
- Biogesic (Paracetamol): 1 tablet every 4-6 hours. ⚠️Max 4 tablets/day. (~₱5/tablet)
- Advil (Ibuprofen): 1 tablet every 6-8 hours. ⚠️Not for ulcers. (~₱15/tablet)

Available at Mercury Drug. If headache lasts more than 2 days, pa-check ka na sa doctor."

User: "Pwede ba ako uminom ng beer pag nag-Biogesic?"
You: "Better avoid alcohol with Biogesic. Pwede mag-cause ng liver damage. Wait at least 24 hours after your last dose."

Now, answer this in a friendly, helpful way: "${message}"`;

    // Call Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [
          { 
            role: 'system', 
            content: 'You are a pharmacist assistant specializing in Philippine OTC medicines. Always list 3-5 options with brand names, dosage, and precautions.' 
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.4 // Lower for more factual responses
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