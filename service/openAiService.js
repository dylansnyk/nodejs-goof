import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure .env is loaded
});

export const getCompletion = async (message) => {
    const response = await client.chat.completions.create({
        model: "gpt-4o-mini", // or gpt-4.1, gpt-3.5-turbo, etc.
        messages: [
            { system: "You are helpful personal trainer." }, 
            { role: "user", content: message }
        ],
    });

    return response
}

