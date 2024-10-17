import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API);
export const model = genAI.getGenerativeModel({ model: "gemini-pro" });
