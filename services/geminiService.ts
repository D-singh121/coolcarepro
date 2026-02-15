
import { GoogleGenAI } from "@google/genai";

/**
 * Checks if the API key is validly configured
 */
export function isAiEnabled(): boolean {
  const apiKey = process.env.API_KEY;
  return !!(apiKey && apiKey !== 'undefined' && apiKey !== 'null' && apiKey !== '');
}

/**
 * Gets a diagnostic response from Gemini.
 * Fails gracefully if no key is present.
 */
export async function getDiagnosticResponse(prompt: string) {
  const apiKey = process.env.API_KEY;

  if (!isAiEnabled()) {
    console.warn("CoolCare Pro: AI is currently disabled (API Key missing). Falling back to manual support message.");
    return "I'm currently in **Maintenance Mode**. For immediate help with your appliance, please call our head technician directly at **+91 84337 80484** or use the WhatsApp button below!";
  }

  try {
    // Re-verify apiKey is a string to satisfy SDK requirements
    const ai = new GoogleGenAI({ apiKey: String(apiKey) });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are an expert home appliance repair technician. Help the user diagnose their AC, washing machine, fridge, or microwave oven issues. Provide concise troubleshooting steps for things like magnetron failure, heating problems, or spinning issues. Always advise them to book a professional service for complex or high-voltage repairs.",
        temperature: 0.7,
      },
    });
    
    return response.text || "I understood your query but couldn't generate a specific troubleshooting guide. Please call us for a manual diagnosis.";
  } catch (error) {
    console.error("AI Diagnostic Error:", error);
    return "I'm having trouble connecting to my diagnostic engine. To avoid any further damage to your appliance, please call our 24/7 support line at **+91 84337 80484**.";
  }
}