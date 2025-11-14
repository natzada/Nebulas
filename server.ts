import express from "express";
import axios from "axios";
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5000;

app.use(cors({
  origin: 'http://localhost:5174', // Porta do seu frontend
}));


app.use(express.json());

// Função para criar um prompt personalizado com base na mensagem
const createCustomPrompt = (userMessage: string): string => {
  // Palavras-chave para respostas personalizadas
  const greetings = ["olá", "oi", "bom dia", "boa tarde", "boa noite"];
  // Defina a tipagem explícita do FAQ
  const faq: { [key: string]: string } = {
    "qual é o seu nome?": "Eu sou o Chatbot, seu assistente virtual!",
    "qual é o horário de funcionamento?":
      "Nosso horário de funcionamento é das 9h às 18h, de segunda a sexta-feira.",
    "como posso te ajudar?":
      "Eu posso responder suas perguntas, ajudar com informações e muito mais!",
  };

  // Verifica se a mensagem do usuário contém uma palavra-chave para uma resposta personalizada
  const lowerUserMessage = userMessage.toLowerCase();
  for (const question in faq) {
    if (lowerUserMessage.includes(question)) {
      return faq[question];
    }
  }

  // Se não encontrar uma palavra-chave, faz um prompt mais genérico para o ChatGPT
  const fallbackPrompt = `
    Seja simpático e útil. A mensagem do usuário foi: "${userMessage}".
    Responda de forma amigável e tente ser útil, caso contrário, seja educado.
  `;

  // Verifica se a mensagem contém uma saudação
  if (greetings.some((greeting) => lowerUserMessage.includes(greeting))) {
    return `Olá! Como posso te ajudar hoje?`;
  }

  return fallbackPrompt;
};

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage || !userMessage.trim()) {
    return res.status(400).json({ error: "A mensagem não pode estar vazia!" });
  }

  try {
    const prompt = createCustomPrompt(userMessage);

    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const chatbotReply = response.data.choices[0].text.trim();
    res.json({ response: chatbotReply });
  } catch (error) {
    console.error("Erro ao chamar a API OpenAI:", error);
    res.status(500).json({ error: "Erro ao comunicar com a OpenAI." });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
