// src/components/VerticalBar.tsx
import { useState } from "react";
import logo from "../assets/images/logo.png";
import { House, User, MessageSquareText, Settings, LogOut } from "lucide-react";
import { Modal } from "./Modal";
import { useNavigate } from "react-router-dom";

type Page = "home" | "profile" | "contact" | "settings";

interface VerticalBarProps {
  isDarkMode: boolean;
  onLogout?: () => void; // ← Recebe do App.tsx
}

function VerticalBar({ isDarkMode, onLogout }: VerticalBarProps) {
  const [selected, setSelected] = useState<Page>("home");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  // Função chamada quando o usuário confirma o logout
  function handleLogout() {
    console.log("Usuário saiu com sucesso!");
    
    // 1. Chama a função de logout do App (limpa estado de auth)
    onLogout?.();

    // 2. Fecha o modal
    setIsModalOpen(false);

    // 3. Redireciona para a tela de login ou landing
    navigate("/auth", { replace: true });
  }

  function handleClick(itemId: Page) {
    setSelected(itemId);
    navigate(itemId === "home" ? "/home" : `/${itemId}`);
  }

  return (
    <>
      <div
        className={`verticalBar m-5 rounded-3xl py-8 px-2 w-50 h-[95%] flex flex-col items-start
          ${isDarkMode ? "bg-[#343434]" : "bg-text1"}
        `}
      >
        <img src={logo} alt="Logo da Nebulas" className="h-16 m-3 mb-7" />

        <nav className="w-full flex-1 flex items-center justify-center">
          <ul className="space-y-6 w-full">
            {/* Início */}
            <li
              onClick={() => handleClick("home")}
              className={`flex items-center gap-4 cursor-pointer px-6 py-2 rounded-r-3xl transition-all ${
                selected === "home"
                  ? "border-l-4 border-primary text-white bg-white/5"
                  : "hover:bg-white/10 text-textmuted"
              }`}
            >
              <House size={30} />
              <span className={`font-medium ${selected === "home" ? "text-white" : "text-textmuted"}`}>
                Início
              </span>
            </li>

            {/* Perfil */}
            <li
              onClick={() => handleClick("profile")}
              className={`flex items-center gap-4 cursor-pointer px-6 py-2 rounded-r-3xl transition-all ${
                selected === "profile"
                  ? "border-l-4 border-primary text-white bg-white/5"
                  : "hover:bg-white/10 text-textmuted"
              }`}
            >
              <User size={30} />
              <span className={`font-medium ${selected === "profile" ? "text-white" : "text-textmuted"}`}>
                Perfil
              </span>
            </li>

            {/* Contato */}
            <li
              onClick={() => handleClick("contact")}
              className={`flex items-center gap-4 cursor-pointer px-6 py-2 rounded-r-3xl transition-all ${
                selected === "contact"
                  ? "border-l-4 border-primary text-white bg-white/5"
                  : "hover:bg-white/10 text-textmuted"
              }`}
            >
              <MessageSquareText size={30} />
              <span className={`font-medium ${selected === "contact" ? "text-white" : "text-textmuted"}`}>
                Contato
              </span>
            </li>

            {/* Configurações */}
            <li
              onClick={() => handleClick("settings")}
              className={`flex items-center gap-4 cursor-pointer px-6 py-2 rounded-r-3xl transition-all ${
                selected === "settings"
                  ? "border-l-4 border-primary text-white bg-white/5"
                  : "hover:bg-white/10 text-textmuted"
              }`}
            >
              <Settings size={30} />
              <span className={`font-medium ${selected === "settings" ? "text-white" : "text-textmuted"}`}>
                Configurações
              </span>
            </li>
          </ul>
        </nav>

        {/* Botão Sair (fora do nav pra ficar embaixo) */}
        <div className="mt-auto mb-8 w-full px-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-4 w-full px-6 py-3 hover:bg-red-500/20 rounded-3xl transition-all text-red-400"
          >
            <LogOut size={30} />
            <span className="font-medium">Sair</span>
          </button>
        </div>
      </div>

      {/* Modal de confirmação */}
      <Modal
        open={isModalOpen}
        title="Sair da conta?"
        message="Tem certeza que deseja encerrar sua sessão?"
        onCancel={() => setIsModalOpen(false)}
        onConfirm={handleLogout}
        confirmText="Sim, sair"
        cancelText="Cancelar"
      />
    </>
  );
}

export default VerticalBar;