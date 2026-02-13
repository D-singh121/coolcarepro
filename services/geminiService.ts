
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getDiagnosticResponse(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are an expert home appliance repair technician. Help the user diagnose their AC, washing machine, fridge, or cooler issues. Provide concise troubleshooting steps. Always advise them to book a professional service for complex repairs.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Diagnostic Error:", error);
    return "I'm having trouble connecting to my diagnostic database. Please try again or book a service directly via WhatsApp!";
  }
}
