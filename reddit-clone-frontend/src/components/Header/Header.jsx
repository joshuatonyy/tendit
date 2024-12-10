import React from "react";
import logo from "../../assets/tendit_logo.png";
import "./Header.css";

export const Header = ({ onLogin = () => {} }) => {
  return (
    <div className="header__header">
      <div className="header__header-left">
        <img src={logo} alt="Tendit Logo" className="header__header-logo" />
        <p className="header__header-title">Tendit</p>
      </div>
      <p className="header__header-login-logout" onClick={onLogin}>
        Login
      </p>
    </div>
  );
};

export default Header;
