// src/App.tsx
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NewPharm from "./components/NewPharm";
import VerticalBar from "./components/VerticalBar";
import Profile from "./components/Profile";
import ChatPage from "./components/ChatBot";
import Settings from "./components/Settings";
import LandingPage from "./pages/landingPage";
import AuthPage from "./pages/Auth"; // ← Sua tela de login/cadastro

// Hook simples de autenticação (pode trocar depois)
const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return { isLoggedIn, login, logout };
};

// Rota protegida
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
}

// Layout do dashboard (só aparece logado)
function DashboardLayout() {
  const { logout } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <div className={`flex h-screen ${isDarkMode ? "bg-[#464646] text-[#cecece]" : "bg-primary text-text1"} md:flex-row flex-col`}>
      <VerticalBar isDarkMode={isDarkMode} onLogout={logout} />

      <div className="flex-1 flex flex-col">
        {isHomePage && (
          <div className="mt-5">
            <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>
        )}

        <div className={`
          flex-1 flex justify-start items-start w-full md:w-[90%] ml-0 md:ml-20 mt-10 mb-10
          ${isHomePage ? "rounded-3xl p-4 md:p-8" : "p-4 md:p-8"}
          overflow-y-auto max-h-[calc(100vh-200px)]
        `}>
          <Routes>
            <Route path="/home" element={<NewPharm isDarkMode={isDarkMode} />} />
            <Route path="/profile" element={<Profile isDarkMode={isDarkMode} />} />
            <Route path="/settings" element={<Settings isDarkMode={isDarkMode} />} />
            <Route path="/contact" element={<ChatPage isDarkMode={isDarkMode} />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  const { login } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Página pública */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Tela de Login/Cadastro */}
        <Route path="/auth" element={<AuthPage onLogin={login} />} />

        {/* Todas as rotas internas protegidas */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;