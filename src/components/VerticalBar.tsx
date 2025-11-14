import { FaHome } from "react-icons/fa";
import { IoIosChatbubbles, IoIosSettings } from "react-icons/io";
import logo from "../assets/images/logo.png";
import { useState } from "react";
import Chatbot from "./ChatBot";

function VerticalBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="verticalBar bg-text1 m-5 rounded-3xl py-8 px-2 w-50 h-185 flex flex-col items-center">
      <img src={logo} alt="Logo da Nebulas" className="h-16 mb-12" />
      <nav className="vertical-navigation w-25 flex-1 flex items-center justify-center rounded-4xl p-2">
        <ul className="space-y-4">
          <li className="text-white border-l-1 cursor-pointer p-2">
            <FaHome size={30} />
            <p>Início</p>
          </li>
          <li
            className="text-white cursor-pointer p-2 rounded-3xl"
            onClick={() => setIsOpen(true)}
          >
            <IoIosChatbubbles size={30} />
          </li>
          <li className="text-white cursor-pointer p-2 rounded-3xl">
            <IoIosSettings size={30} />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default VerticalBar;
