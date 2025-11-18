import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NewPharm from "./components/NewPharm";
import VerticalBar from "./components/VerticalBar";
import Profile from "./components/Profile";
import ChatPage from "./components/ChatBot";

function AppContent() {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Defina as rotas onde a sidebar e header aparecem
  const showSidebar = location.pathname !== "/contact";

  if (showSidebar) {
    return (
      <div
        className={`
          flex h-screen transition-all duration-500 ease-in-out
          ${isDarkMode ? "bg-[#464646] text-[#cecece]" : "bg-primary text-text1"}
        `}
      >
        <VerticalBar isDarkMode={isDarkMode} />

        <div className="flex-1 flex flex-col mt-5">
          <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

          <div
            className={`
              flex justify-start items-start w-5xl h-screen ml-20 mt-10 mb-20 
              rounded-3xl p-8 overflow-y-auto transition-all duration-500
            `}
          >
            <Routes>
              <Route path="/" element={<NewPharm isDarkMode={isDarkMode} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<div>Configurações</div>} />
              <Route path="/contact" element={<ChatPage />} />
              {/* O /contact aqui será ignorado, pois showSidebar é falso para ele */}
            </Routes>
          </div>
        </div>
      </div>
    );
  }

  // Caso seja a rota /contact, layout full screen sem sidebar nem header
  return (
    <div
      className={`
        h-screen w-screen 
        ${isDarkMode ? "bg-[#464646] text-[#cecece]" : "bg-primary text-text1"}
      `}
    >
      <Routes>
        <Route path="/contact" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
