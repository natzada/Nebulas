import { useState } from "react";
import logo from "../assets/images/logo.png";
import { House, User, MessageSquareText, Settings, LogOut } from "lucide-react";
import { Modal } from "./Modal";
import { useNavigate } from "react-router-dom";

type Page = "home" | "profile" | "contact" | "settings";

interface VerticalBarProps {
  isDarkMode: boolean;
}

function VerticalBar({ isDarkMode }: VerticalBarProps) {
  const [selected, setSelected] = useState<Page>("home");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  function handleLogout() {
    console.log("Usuário confirmou sair");
    setIsModalOpen(false);
  }

  function handleClick(itemId: Page) {
    setSelected(itemId);
    navigate(itemId === "home" ? "/" : `/${itemId}`);
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
              <span
                className={`font-medium ${
                  selected === "home" ? "text-white" : "text-textmuted"
                }`}
              >
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
              <span
                className={`font-medium ${
                  selected === "profile" ? "text-white" : "text-textmuted"
                }`}
              >
                Perfil
              </span>
            </li>

            {/* Contato */}
            <li
              onClick={() => handleClick("contact")}
              className={`flex items-center gap-4 cursor-pointer px-6 py-2 mb-60 rounded-r-3xl transition-all ${
                selected === "contact"
                  ? "border-l-4 border-primary text-white bg-white/5"
                  : "hover:bg-white/10 text-textmuted"
              }`}
            >
              <MessageSquareText size={30} />
              <span
                className={`font-medium ${
                  selected === "contact" ? "text-white" : "text-textmuted"
                }`}
              >
                Contato
              </span>
            </li>

            {/* Configurações */}
            <li
              onClick={() => handleClick("settings")}
              className={`flex items-center gap-4 cursor-pointer px-4 py-2 rounded-r-3xl transition-all ${
                selected === "settings"
                  ? "border-l-4 border-primary text-white bg-white/5"
                  : "hover:bg-white/10 text-textmuted"
              }`}
            >
              <Settings size={30} />
              <span
                className={`font-medium ${
                  selected === "settings" ? "text-white" : "text-textmuted"
                }`}
              >
                Configurações
              </span>
            </li>

            {/* Sair */}
            <li
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-4 cursor-pointer px-4 py-2 hover:bg-red-500/20 rounded-3xl transition mt-auto mb-8"
            >
              <LogOut size={30} className="text-red-400" />
              <span className="font-medium text-red-400">Sair</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Modal aplicado no clique */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}

export default VerticalBar;
