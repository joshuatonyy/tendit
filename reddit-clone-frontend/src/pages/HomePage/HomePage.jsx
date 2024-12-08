import React, { useState } from "react";
import './HomePage.css'
import { AuthForm } from "../../components/AuthForm/AuthForm";

export const HomePage = () => {
  const [isAuthFormVisible, setIsAuthFormVisible] = useState(false);

    const handleLogin = () => {
        setIsAuthFormVisible(true);
    }

    const handleCloseForm = () => {
      setIsAuthFormVisible(false);
    }

  return (
    <div className="homepage__container">
      <div className="homepage__header">
        <p className="homepage__header-title">Tendit</p>
          <p className="homepage__header-login-logout" onClick={handleLogin}>
            Login
          </p>
       
      </div>

      {isAuthFormVisible && <AuthForm onClose={handleCloseForm}/>}
    </div>
  );
};
