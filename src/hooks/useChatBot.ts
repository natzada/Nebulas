import { useState } from "react";

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
export type ChatMessage = BaseMessage | FunctionOrToolMessage;

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Olá, como posso te ajudar hoje? 😊",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const contentToString = (c: any) => {
    if (!c) return "";
    if (typeof c === "string") return c;
    return c
      .map((p: any) => (typeof p?.text === "string" ? p.text : ""))
      .join(" ");
  };

  async function send() {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: "user", content: input };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const apiMessages = newMessages.map((m) => ({
        role: m.role,
        content: contentToString(m.content),
      }));

      const response = await fetch("http://localhost:3001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await response.json();
      const reply = data.reply;

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Erro ao chamar a API." },
      ]);
    }

    setLoading(false);
  }

  return { messages, input, setInput, send, loading, contentToString };
}
