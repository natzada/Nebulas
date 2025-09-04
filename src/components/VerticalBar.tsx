import { FaHome } from "react-icons/fa";
import { IoIosChatbubbles, IoIosSettings } from "react-icons/io";
import logo from "../assets/images/nebulas-logo.png";

function VerticalBar() {
  return (
    <div className="verticalBar bg-transparent  w-50 h-screen flex flex-col items-center py-4">
              {/* Logo da Nebulas */}
        <img src={logo} alt="Logo da Nebulas" className="h-15 mb-15" />
      <nav className="vertical-navigation w-25 flex-1 flex items-center justify-center bg-secondary rounded-4xl p-2">
        <ul className="space-y-4">
          <li className="text-identity hover:text-text1 cursor-pointer mb-95 bg-primary p-2 rounded-3xl"><FaHome size={30}/></li>
          <li className="text-identity hover:text-text1 cursor-pointer bg-primary p-2 rounded-3xl"><IoIosChatbubbles size={30}/></li>
          <li className="text-identity hover:text-text1 cursor-pointer bg-primary p-2 rounded-3xl"><IoIosSettings size={30}/></li>
        </ul>
      </nav>
    </div>
  );
}

export default VerticalBar;