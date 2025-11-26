// src/pages/AuthPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff, Sparkles } from "lucide-react";

interface AuthPageProps {
  onLogin?: () => void;
}

export default function AuthPage({ onLogin }: AuthPageProps = {}) {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin?.();
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center p-6">
      {/* Card principal com borda suave e sombra delicada */}
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl border border-[#5263B5]/10 overflow-hidden flex flex-col lg:flex-row">
        
        {/* Lado do formulário */}
        <div className="w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-gradient-to-b from-white to-[#f8f8f8]/50">
          <div className="max-w-md mx-auto w-full">
            {/* Logo com toque de cor */}
            <div className="flex justify-center mb-10">
              <div className="p-5 bg-[#5263B5] rounded-3xl shadow-lg">
                <Sparkles className="w-14 h-14 text-white" />
              </div>
            </div>

            {/* Título */}
            <h1 className="text-4xl font-black text-center text-[#3b3b3b] mb-3">
              {isRegister ? "Crie sua conta" : "Bem-vindo de volta"}
            </h1>
            <p className="text-center text-[#3b3b3b]/70 mb-12 text-lg">
              {isRegister
                ? "Comece agora — é rápido e grátis"
                : "Acesse sua conta e gerencie suas farmácias"}
            </p>

            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Nome completo */}
              {isRegister && (
                <div className="relative group">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-[#5263B5]/70 group-focus-within:text-[#5263B5] transition" />
                  <input
                    type="text"
                    placeholder="Nome completo"
                    required
                    className="w-full pl-16 pr-6 py-5 bg-[#f3f3f3] border border-[#5263B5]/20 rounded-2xl text-[#3b3b3b] placeholder-[#3b3b3b]/50 focus:outline-none focus:border-[#5263B5] focus:ring-4 focus:ring-[#5263B5]/10 transition-all text-lg font-medium"
                  />
                </div>
              )}

              {/* Email */}
              <div className="relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-[#5263B5]/70 group-focus-within:text-[#5263B5] transition" />
                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  className="w-full pl-16 pr-6 py-5 bg-[#f3f3f3] border border-[#5263B5]/20 rounded-2xl text-[#3b3b3b] placeholder-[#3b3b3b]/50 focus:outline-none focus:border-[#5263B5] focus:ring-4 focus:ring-[#5263B5]/10 transition-all text-lg font-medium"
                />
              </div>

              {/* Senha */}
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-[#5263B5]/70 group-focus-within:text-[#5263B5] transition" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  required
                  className="w-full pl-16 pr-16 py-5 bg-[#f3f3f3] border border-[#5263B5]/20 rounded-2xl text-[#3b3b3b] placeholder-[#3b3b3b]/50 focus:outline-none focus:border-[#5263B5] focus:ring-4 focus:ring-[#5263B5]/10 transition-all text-lg font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-[#5263B5]/70 hover:text-[#5263B5]"
                >
                  {showPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                </button>
              </div>

              {/* Confirmar senha */}
              {isRegister && (
                <div className="relative group">
                  <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-[#5263B5]/70 group-focus-within:text-[#5263B5] transition" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirmar senha"
                    required
                    className="w-full pl-16 pr-16 py-5 bg-[#f3f3f3] border border-[#5263B5]/20 rounded-2xl text-[#3b3b3b] placeholder-[#3b3b3b]/50 focus:outline-none focus:border-[#5263B5] focus:ring-4 focus:ring-[#5263B5]/10 transition-all text-lg font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-[#5263B5]/70 hover:text-[#5263B5]"
                  >
                    {showConfirmPassword ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
                  </button>
                </div>
              )}

              {/* Botão principal */}
              <button
                type="submit"
                className="w-full py-6 bg-[#5263B5] hover:bg-[#455499] text-white font-bold text-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {isRegister ? "Criar conta gratuita" : "Entrar agora"}
              </button>
            </form>

            {/* Alternância */}
            <div className="text-center mt-10">
              <span className="text-[#3b3b3b]/70">
                {isRegister ? "Já tem uma conta?" : "Ainda não tem conta?"}
              </span>{" "}
              <button
                onClick={() => setIsRegister(!isRegister)}
                className="font-bold text-[#5263B5] hover:text-[#455499] transition"
              >
                {isRegister ? "Fazer login" : "Criar conta grátis"}
              </button>
            </div>
          </div>
        </div>

        {/* Lado direito - Visual com degradê suave (só azul + verde claro) */}
        <div className="hidden lg:block w-1/2 bg-gradient-to-br from-[#5263B5] via-[#5263B5]/95 to-[#64C05D]/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#5263B5]/40" />
          
          <div className="relative h-full flex flex-col justify-between p-16 text-white">
            <div>
              <h2 className="text-5xl font-black leading-tight mb-6">
                {isRegister ? "O futuro das farmácias começa aqui" : "Gerencie com inteligência e simplicidade"}
              </h2>
              <p className="text-xl text-white/90 max-w-lg">
                {isRegister
                  ? "Junte-se a milhares de farmacêuticos que já transformaram suas lojas com o Nebula's."
                  : "Um sistema completo: múltiplas unidades, layouts otimizados e assistente IA 24h."}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                  <Sparkles className="w-9 h-9" />
                </div>
                <div>
                  <p className="text-3xl font-black">98%</p>
                  <p className="text-white/80">de satisfação</p>
                </div>
              </div>
            </div>

            {/* Círculos decorativos sutis */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#64C05D]/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}