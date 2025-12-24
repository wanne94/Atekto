import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Lazy initialization - only create client when needed
let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai && process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

const SYSTEM_INSTRUCTION = `
Ti si stručni arhitekta i konsultant za prodaju "Atekto" kuća.
Tvoj cilj je da pomogneš potencijalnim kupcima da odaberu idealan model A-Frame vikendice, odgovoriš na pitanja o gradnji, izolaciji i cijeni.
Budi ljubazan, profesionalan i koristi hrvatski/srpski jezik.
Naši modeli su:
1. "Mala Vila" (45m2, 1 spavaća, idealno za parove)
2. "Planinski Vrh" (75m2, 2 spavaće, porodična varijanta)
3. "Veliki Horizont" (110m2, 3 spavaće, luksuzna varijanta)

Odgovaraj sažeto i korisno.
`;

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  const client = getAIClient();

  if (!client) {
    return "AI asistent trenutno nije dostupan. Molimo kontaktirajte nas direktno na +387 62 712 594.";
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: newMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || "Izvinite, trenutno ne mogu da odgovorim. Pokušajte ponovo.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Došlo je do greške u komunikaciji sa AI asistentom. Molimo provjerite vašu internet konekciju.";
  }
};