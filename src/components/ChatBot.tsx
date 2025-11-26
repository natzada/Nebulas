// ChatPage.tsx
import { SidebarChat } from "../components/SideBarChat";
import { useChatbot } from "../hooks/useChatBot";
import { useState } from "react";
import ContactForm from "./ContactForm";

export default function ChatPage() {
  const { messages, input, setInput, send, loading, contentToString } = useChatbot();
  const [activeView, setActiveView] = useState<"chat" | "contact">("chat");

  return (
    <div className="flex h-[100%] w-full">
      {/* Sidebar */}
      <SidebarChat activeView={activeView} onViewChange={setActiveView} />

      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col px-16 py-12 max-w-5xl mx-auto w-full">
        {activeView === "chat" ? (
          <>
            {/* Header do Chat */}
            <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800 select-none">
              Nebulosa <span className="text-greenF">Assistente</span>
            </h1>

            {/* Área das mensagens */}
            <div className="flex-1 overflow-y-auto p-8 bg-white rounded-3xl shadow-lg border border-gray-200 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mb-6">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`my-3 flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-6 py-3 max-w-xl rounded-2xl leading-relaxed whitespace-pre-wrap break-words ${
                      msg.role === "user"
                        ? "bg-gradient-to-r from-green-400 to-green-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    {contentToString(msg.content)}
                  </div>
                </div>
              ))}

              {loading && (
                <p className="text-gray-400 mt-2 italic animate-pulse select-none">
                  Digitando...
                </p>
              )}
            </div>

            {/* Input do Chat */}
            <div className="w-full flex items-center bg-white border border-gray-300 rounded-3xl p-4 shadow-md">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
                placeholder="Digite sua mensagem..."
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 font-medium"
                autoFocus
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="ml-4 px-6 py-2 bg-greenF hover:bg-greenF/90 disabled:bg-gray-400 transition rounded-2xl text-white font-semibold shadow-md"
              >
                Enviar
              </button>
            </div>
          </>
        ) : (
          <ContactForm />
        )}
      </div>
    </div>
  );
}