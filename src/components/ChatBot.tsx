import { useChatbot } from "../hooks/useChatBot";

interface ChatProps {
  isDarkMode: boolean;
}

export default function ChatPage({ isDarkMode }: ChatProps) {
  const { messages, input, setInput, send, loading, contentToString } =
    useChatbot();

  return (
    <div className="w-full h-full flex gap-8 p-4 md:p-8">
      {/* Conteúdo Principal */}
      <div className="flex-1 flex flex-col gap-6">
        <>
          {/* Título */}
          <h1 className={`text-4xl md:text-5xl font-black text-center
            ${isDarkMode? "text-white" : "text-text1"}
            `}>
            Nebulosa <span className="text-yellowF">Assistente</span>
          </h1>

          {/* Janela do Chat */}
          <div className={`flex-1 backdrop-blur-sm rounded-3xl shadow-xl border p-6 md:p-8 flex flex-col
            ${isDarkMode? "bg-[#34343490] border-neutral-700" : "bg-white/90 border-neutral-100"}
            `}>
            <div className="flex-1 overflow-y-auto pr-2 -mr-2">
              {messages.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <p className="text-gray-400 text-lg italic">
                    Olá, como posso te ajudar hoje?
                  </p>
                </div>
              ) : (
                messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`mb-4 flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs md:max-w-md px-5 py-3 rounded-3xl shadow-md ${
                        msg.role === "user"
                          ? "bg-gray-100 text-gray-800"
                          : "bg-yellowF text-white"
                      }`}
                    >
                      {contentToString(msg.content)}
                    </div>
                  </div>
                ))
              )}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 px-5 py-3 rounded-3xl shadow-md text-gray-600 italic">
                    Digitando...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="mt-6 flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Digite sua mensagem..."
                className={`flex-1 px-6 py-4 border  rounded-full focus:outline-none focus:border-yellowF focus:ring-4 focus:ring-yellowF/20 transition
                  ${isDarkMode?
                    "bg-text1 border-neutral-800"
                    :
                    "bg-gray-50 border-gray-200"
                  }
                  `}
                autoFocus
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="px-8 py-4 bg-yellowF text-white font-medium rounded-full hover:bg-yellowF/90 disabled:opacity-60 transition shadow-lg"
              >
                Enviar
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
