import { Link } from "react-router-dom";
import { ArrowRight, Star, Store, Users, MessageCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f3f3f3] text-[#3b3b3b] flex flex-col">
      {/* Header */}
      <header className="px-6 py-5 md:px-12 lg:px-20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Star className="w-8 h-8 text-[#558B2F]" />
          <h1 className="text-3xl font-bold">Nebula's</h1>
        </div>
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="hover:text-[#558B2F] transition">Recursos</a>
          <a href="#about" className="hover:text-[#558B2F] transition">Sobre</a>
          <a href="#contact" className="hover:text-[#558B2F] transition">Contato</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 py-16 md:px-12 lg:px-20 gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Gerencie suas <span className="text-[#558B2F]">farmácias</span><br />
            com inteligência
          </h2>
          <p className="text-xl md:text-2xl text-[#3b3b3b]/80 mb-10">
            O sistema completo para redes de farmácias: controle de estoque, layout inteligente,
            chat com assistente IA e muito mais.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Link
              to="/login"
              className="px-10 py-5 bg-[#5263B5] hover:bg-[#455499] text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group"
            >
              Entrar agora
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition" />
            </Link>
            <Link
              to="/register"
              className="px-10 py-5 bg-white hover:bg-[#f8f8f8] border-2 border-[#558B2F] text-[#558B2F] font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
            >
              Criar conta grátis
            </Link>
          </div>
        </div>

        {/* Ilustração / Mockup */}
        <div className="w-full max-w-2xl">
          <div className="bg-gradient-to-br from-[#558B2F]/10 to-[#5263B5]/10 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Store className="w-12 h-12 text-[#558B2F] mx-auto mb-3" />
                <p className="font-bold">+50 farmácias</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <Users className="w-12 h-12 text-[#5263B5] mx-auto mb-3" />
                <p className="font-bold">+1.200 usuários</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center col-span-2">
                <MessageCircle className="w-16 h-16 text-[#D2BE2D] mx-auto mb-4" />
                <p className="text-xl font-bold text-[#D2BE2D]">Assistente IA 24h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-black text-center mb-16">
            Tudo que sua farmácia precisa
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#558B2F]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Store className="w-10 h-10 text-[#558B2F]" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Gestão Multi-lojas</h4>
              <p className="text-[#3b3b3b]/70">Controle todas as suas unidades em um só lugar</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#5263B5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-[#5263B5]" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Assistente com IA</h4>
              <p className="text-[#3b3b3b]/70">Respostas instantâneas para clientes e equipe</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#D2BE2D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-[#D2BE2D]" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Layout Otimizado</h4>
              <p className="text-[#3b3b3b]/70">Aumente suas vendas com disposição inteligente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-12 lg:px-20 bg-[#3b3b3b] text-white text-center">
        <p className="text-lg">© 2025 Nebula's — Todos os direitos reservados</p>
        <p className="text-sm text-white/70 mt-2">
          Desenvolvido com carinho para redes de farmácias do Brasil
        </p>
      </footer>
    </div>
  );
}