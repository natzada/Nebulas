import { FaHome } from "react-icons/fa";
import { IoIosChatbubbles, IoIosSettings } from "react-icons/io";

function VerticalBar() {
  return (
    <div className="verticalBar bg-transparent  w-16 h-screen flex flex-col items-center py-4">
              {/* Logo da Nebulas */}
        <img src="" alt="Logo da Nebulas" className="h-8 mb-25" />
      <nav className="vertical-navigation flex-1 flex items-center bg-gray-100 rounded-lg p-2">
        <ul className="space-y-4">
          <li><FaHome className="text-gray-600 hover:text-purple-600 cursor-pointer mb-4" /></li>
          <li className="text-gray-600 hover:text-purple-600 cursor-pointer"><IoIosChatbubbles /></li>
          <li className="text-gray-600 hover:text-purple-600 cursor-pointer"><IoIosSettings /></li>
        </ul>
      </nav>
    </div>
  );
}

export default VerticalBar;