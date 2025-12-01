import type { Problem } from "../data/types";


export async function generateProblem(topic: string, apiKey: string): Promise<Problem> {
    const prompt = `
    Generate a single JavaScript coding problem about "${topic}".
    Return ONLY a JSON object with the following structure, no markdown formatting:
    {
      "id": "generated-${Date.now()}",
      "type": "code",
      "prompt": "Description of the problem...",
      "codeTemplate": "const starter = ...",
      "solution": "const solution = ...",
      "validationCode": "assert(result === expected)"
    }
    
    For the validationCode:
    - Assume the user's code runs first.
    - The validation code should check variables or output.
    - Use simple assertions or console.log checks.
    - Example validation: "if (sum !== 10) throw new Error('Sum should be 10');"
  `;

    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: prompt }]
                }]
            })
        }
    );

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to generate problem');
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
        throw new Error('No content generated');
    }

    try {
        // Clean up any potential markdown code blocks if the model ignores "no markdown"
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanedText) as Problem;
    } catch (e) {
        console.error('Failed to parse Gemini response:', text);
        throw new Error('Failed to parse generated problem');
    }
}

export async function listModels(apiKey: string) {
    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    );

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to list models');
    }

    const data = await response.json();
    return data.models || [];
}
