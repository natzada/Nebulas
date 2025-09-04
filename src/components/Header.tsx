import { FaSearch, FaUser } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-primary p-4 flex items-center justify-end">
      <nav className="flex items-center space-x-4 mt-5">
        <ul className="flex space-x-4">
          {!isSearchOpen ? (
            <li
              className="text-primary hover:bg-text1 cursor-pointer bg-identity rounded-full p-2"
              onClick={handleSearchClick}
            >
              <FaSearch size={20} />
            </li>
          ) : (
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Pesquise sua farmácia..."
                className="w-200 h-10 p-2 mr-90 pl-5 bg-identity ease-in-out text-white rounded-3xl focus:outline-none"
                onBlur={() => setIsSearchOpen(false)} // Fecha ao perder o foco
              />
            </div>
          )}
          <li className="text-primary hover:bg-text1 cursor-pointer bg-identity rounded-full p-2">
            <FaUser size={20} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
