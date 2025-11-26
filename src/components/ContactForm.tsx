// components/ContactForm.tsx
import { useState } from "react";
import { Send, User, Mail, MessageSquare, Sparkles } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulação de envio
    await new Promise((resolve) => setTimeout(resolve, 1600));

    setStatus("success");
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setStatus("idle");
    }, 3000);
  };

  return (
    <div className="flex-1 flex h-[90%] flex-col items-center justify-center px-8 py-12">
      {/* Cabeçalho */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-black text-gray-800 flex items-center justify-center gap-3">
          Fale Conosco <Sparkles className="text-greenF size={36}" />
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Tire dúvidas, envie sugestões ou apenas diga oi!
        </p>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-7">
        {/* Nome */}
        <div className="relative group">
          <User className="absolute left-5 top-5 text-gray-400 group-focus-within:text-greenF transition-colors" size={24} />
          <input
            type="text"
            placeholder="Seu nome"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full pl-14 pr-6 py-5 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-greenF focus:ring-4 focus:ring-greenF/20 transition-all shadow-md hover:shadow-lg"
          />
        </div>

        {/* Email */}
        <div className="relative group">
          <Mail className="absolute left-5 top-5 text-gray-400 group-focus-within:text-greenF transition-colors" size={24} />
          <input
            type="email"
            placeholder="Seu email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full pl-14 pr-6 py-5 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-greenF focus:ring-4 focus:ring-greenF/20 transition-all shadow-md hover:shadow-lg"
          />
        </div>

        {/* Mensagem */}
        <div className="relative group">
          <MessageSquare className="absolute left-5 top-6 text-gray-400 group-focus-within:text-greenF transition-colors" size={24} />
          <textarea
            placeholder="Sua mensagem..."
            required
            rows={7}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full pl-14 pr-6 pt-5 pb-3 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-greenF focus:ring-4 focus:ring-greenF/20 transition-all shadow-md hover:shadow-lg resize-none"
          />
        </div>

        {/* Botão */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-5 bg-greenF hover:bg-greenF/90 disabled:opacity-70 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
        >
          {status === "sending" ? (
            "Enviando..."
          ) : status === "success" ? (
            "Mensagem enviada!"
          ) : (
            <>
              <Send size={24} />
              Enviar Mensagem
            </>
          )}
        </button>

        {/* Mensagem de sucesso */}
        {status === "success" && (
          <p className="text-center text-green-600 font-bold text-lg animate-pulse -mt-4">
            Mensagem enviada com sucesso! Em breve responderemos.
          </p>
        )}
      </form>
    </div>
  );
}