import React, { useState } from "react";
import logo from "../assets/images/nebulas-logo.png";
import "./Auth.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Auth: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="main-container">
      <div className="bg-container">
        <div className={`container ${isRegister ? "register-mode" : ""}`}>
          {/* Painel da esquerda */}
          <div className="panel left-panel">
            <img src={logo} alt="Nebula’s Logo" className="w-50 h-auto" />
            <p className="text-3xl font-extrabold text-center">
              {isRegister ? "Já tem uma conta?" : "Olá! Não tem uma conta?"}
            </p>
            <button onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? "Login" : "Registre-se"}
            </button>
          </div>

          {/* Painel da direita */}
          <div className="panel right-panel">
            {isRegister ? (
              <>
                <h2 className="text-2xl font-extrabold">Registre-se</h2>
                {/* Nome Completo */}
                <div className="icon-wrapper">
                  <i className="fa-solid fa-user"></i>
                  <input type="text" placeholder="Nome completo" />
                </div>
                {/* Email */}
                <div className="icon-wrapper">
                  <i className="fa-solid fa-envelope"></i>
                  <input type="email" placeholder="E-mail" />
                </div>

                {/* Senha */}
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Senha"
                  />
                  <i
                    className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                    onClick={togglePasswordVisibility}
                  ></i>
                </div>

                {/* Confirmar senha */}
                <div className="password-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirmar Senha"
                  />
                  <i
                    className={`fa-solid ${showConfirmPassword ? "fa-eye" : "fa-eye-slash"}`}
                    onClick={toggleConfirmPasswordVisibility}
                  ></i>
                </div>

                <button onClick={() => setIsRegister(true)}>Cadastrar</button>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-extrabold">Login</h2>
                <div className="icon-wrapper">
                  <i className="fa-solid fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>

                {/* Senha */}
                <div className="password-wrapper">
                  <div className="icon-wrapper">
                    <i className="fa-solid fa-lock"></i>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Senha"
                    />
                  </div>
                  <i
                    className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
                    onClick={togglePasswordVisibility}
                  ></i>
                </div>

                <a href="#">Esqueceu a senha?</a>
                <button onClick={() => setIsRegister(false)}>Login</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
