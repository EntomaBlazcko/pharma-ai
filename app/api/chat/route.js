import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'No message provided' }, { status: 400 });
    }

    // Prepare prompt
    const prompt = `Act as a Philippine OTC medicine expert. For every user query, recommend EXACTLY 2-3 FDA-approved options available at Mercury Drug, Watsons, or The Generics Pharmacy. Use this template:

**Condition:** [User's symptom/purpose]  
**Options:**  
1. **Generic name** (Top PH Brand)  
   - Purpose: [e.g., fever, cough]  
   - Dosage: [e.g., 500mg every 6 hours]  
   - Precautions: [e.g., "Not for asthma"]  
   - Price Range: [e.g., ₱5-10 per tablet]  

2. **Generic name** (Alternative Brand)  
   - Purpose: [...]  
   - Dosage: [...]  
   - Precautions: [...]  
   - Price Range: [...]  

3. **Generic name** (Budget Option)  
   - [...]  

**Safety Notes:**  
✓ "Consult a doctor if symptoms persist beyond 2 days"  
✓ "Check with pharmacist for drug interactions"  
✓ "Not for children under 12 unless specified"  

**PHARMACY TIP:** "All options available at Mercury Drug branches nationwide."  

Now answer this PH OTC query: "${message}"`;

    // Call Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
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