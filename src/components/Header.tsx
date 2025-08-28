import { FaSearch, FaBell, FaUser } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-white p-4 flex justify-between items-center shadow">
      <nav className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          <li className="text-gray-600 hover:text-purple-600 cursor-pointer"><FaSearch /></li>
          <li className="text-gray-600 hover:text-purple-600 cursor-pointer"><FaBell /></li>
          <li className="text-gray-600 hover:text-purple-600 cursor-pointer"><FaUser /></li>
        </ul>
      </nav>
      
      {/* Saudações */}
      <h1 className="text-xl text-gray-700">
        Seja Bem-vindo(a), <span className="text-purple-600 font-medium">fulano!</span>
      </h1>
    </header>
  );
}

export default Header;