import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import Switch from "./Switch";

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

function Header({ isDarkMode, toggleTheme }: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Pesquisando:", searchTerm);
  };

  return (
    <header className="p-4 flex items-center justify-around relative">
      {/* Barra de pesquisa fixa */}
      <div className="flex items-center flex-1 max-w-2xl">
        <form
          onSubmit={handleSearch}
          className="flex items-center space-x-2 w-full relative"
        >
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Pesquise sua farmácia..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`
                h-12 px-4 pr-12
                rounded-3xl
                focus:outline-none
                shadow-md
                w-full
                ${isDarkMode ? "bg-[#343434] text-white" : "bg-white text-text1"  }
              `}
            />
            <button
              type="submit"
              className={`
                absolute right-2 top-1/2 transform -translate-y-1/2
                text-text1 hover:text-identity 
                cursor-pointer 
                p-1
                transition-colors
                ${isDarkMode ? "text-white" : "text-text1"}
              `}
            >
              <FaSearch size={18} />
            </button>
          </div>
        </form>
      </div>
      <div className="">
        <Switch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
}

export default Header;
