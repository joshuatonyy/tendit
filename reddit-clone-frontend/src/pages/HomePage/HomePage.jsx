import React, { useState } from "react";
import "./HomePage.css";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import logo from "../../assets/tendit_logo.png"

export const HomePage = () => {
  const [isAuthFormVisible, setIsAuthFormVisible] = useState(false);

  const handleLogin = () => {
    setIsAuthFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsAuthFormVisible(false);
  };

  return (
    <div className="homepage__container">
      <div className="homepage__header">
        <div className="homepage__header-left">
          <img
            src={logo}
            alt="Tendit Logo"
            className="homepage__header-logo"
          />
          <p className="homepage__header-title">Tendit</p>
        </div>
        <p className="homepage__header-login-logout" onClick={handleLogin}>
          Login
        </p>
      </div>

      {isAuthFormVisible && <AuthForm onClose={handleCloseForm} />}
    </div>
  );
};
