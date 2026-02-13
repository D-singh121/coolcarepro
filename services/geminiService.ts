
import { GoogleGenAI } from "@google/genai";

// Lazily create the client so a missing API key
// doesn't crash the whole app on load (which is
// what causes a blank page on Vercel).
let ai: GoogleGenAI | null = null;

function getClient(): GoogleGenAI | null {
  // Prefer API_KEY (as currently used in Vercel config),
  // but also allow GEMINI_API_KEY for flexibility.
  const apiKey =
    (process.env.API_KEY as string | undefined) ||
    (process.env.GEMINI_API_KEY as string | undefined) ||
    "";

  if (!apiKey) {
    // When no key is configured we keep the UI working
    // and just disable the AI call.
    if (typeof console !== "undefined") {
      console.warn(
        "Gemini API key is not set. The AI diagnostic chat will return a fallback message."
      );
    }
    return null;
  }

  if (!ai) {
    ai = new GoogleGenAI({ apiKey });
  }

  return ai;
}

export async function getDiagnosticResponse(prompt: string) {
  try {
    const client = getClient();

    if (!client) {
      return "The AI diagnostic assistant is currently offline because the Gemini API key is not configured. Please describe your issue on WhatsApp to get quick human support.";
    }

    const response = await client.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction:
          "You are an expert home appliance repair technician. Help the user diagnose their AC, washing machine, fridge, or cooler issues. Provide concise troubleshooting steps. Always advise them to book a professional service for complex repairs.",
        temperature: 0.7,
      },
    });

    // Newer @google/genai clients expose a text() helper,
    // but we keep a safe fallback in case it's not present.
    // @ts-ignore - text() may not be declared on the type in older versions
    const text = typeof response.text === "function" ? response.text() : "";
    return text || "I generated a response, but couldn't format it correctly. Please try again.";
  } catch (error) {
    console.error("AI Diagnostic Error:", error);
    return "I'm having trouble connecting to my diagnostic database. Please try again or book a service directly via WhatsApp!";
  }
}
