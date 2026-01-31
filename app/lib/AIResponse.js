import HereGetBestSystemPromptBaseOnService from "./systemPrompts";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function ChatWithAI(getSystemPromp, Message) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: Message,
    config: {
      systemInstruction: getSystemPromp,
    },
  });
  if (!response.text) {
    return "Please Wait Out AI is Busy....";
  }
  return response.text;
}

// await main();

export const AIResponse = async (Message, SerivceUserd) => {
  try {
    const getSystemPromp = HereGetBestSystemPromptBaseOnService[SerivceUserd];
    // console.log(getSystemPromp);
    const Responce = await ChatWithAI(getSystemPromp, Message);

    return Responce;
  } catch (error) {
    console.log("something wents wrong.", error);
  }
};
