// src/components/ChatBot.tsx
import { useState } from "react";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // só para dev/local
});

/** Tipos locais (simples e suficientes para UI + chamada) */
type ContentPart = { type?: string; text?: string } & Record<string, any>;
type BaseMessage = {
  role: "system" | "user" | "assistant";
  content: string | ContentPart[] | null | undefined;
  name?: string;
};
type FunctionOrToolMessage = {
  role: "function" | "tool";
  name: string;
  content: string | ContentPart[] | null | undefined;
};
type ChatMessage = BaseMessage | FunctionOrToolMessage;

export default function Chatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "system",
      content: "Olá, como posso te ajudar hoje? 😊",
    },
  ]);
  const [input, setInput] = useState("");

  const contentToString = (c: string | ContentPart[] | null | undefined) => {
    if (!c) return "";
    if (typeof c === "string") return c;
    return c.map((p) => (typeof p?.text === "string" ? p.text : "")).join(" ");
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: "user", content: input };
    const allMessages = [...messages, userMsg];
    setMessages(allMessages);
    setInput("");

    try {
      // 🔥 Normalizamos para garantir que só strings vão para a API
      const apiMessages = allMessages
        .filter(
          (m) =>
            m.role === "system" || m.role === "user" || m.role === "assistant"
        )
        .map((m) => ({
          role: m.role,
          content:
            typeof m.content === "string"
              ? m.content
              : contentToString(m.content),
        }));

      const response = await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: apiMessages as any, // cast evita erro de TS sobre função/tool
      });

      const replyContent = response?.choices?.[0]?.message?.content ?? "";
      const assistantMsg: ChatMessage = {
        role: "assistant",
        content: replyContent,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Erro API OpenAI:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Ocorreu um erro ao chamar a API." },
      ]);
    } 
  };

  return (
  <div className="p-6 max-w-lg mx-auto flex flex-col h-full">
    <h1 className="text-2xl font-bold mb-4 text-identity">Nebulosas Assistent 🤖</h1>

    <div className="shadow-2xl rounded-xl p-4 h-96 flex flex-col bg-secondary">
      {/* Área das mensagens, com scroll */}
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <p
            key={i}
            className={msg.role === "user" ? "text-text1" : "text-identity"}
          >
            <b>{msg.role === "user" ? "Você" : "Bot"}:</b>{" "}
            {contentToString(msg.content)}
          </p>
        ))}
      </div>

      {/* Input + botão sempre no final */}
      <div className="flex">
        <input
          className="flex-1 focus:outline-none border rounded-l-xl bg-primary px-3 py-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Digite sua mensagem..."
        />
        <button
          className="bg-identity text-white px-4 rounded-r-xl"
          onClick={sendMessage}
        >
          Enviar
        </button>
      </div>
    </div>
  </div>
);

}
