import React, { useState, useEffect } from "react";
import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../assets/tendit_logo.png";
import "./Header.css";

export const Header = ({ onLogin = () => {}, onLogout = () => {} }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("userID");
    setIsLoggedIn(!!username && !!userId);
  }, []);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      onLogout();
      localStorage.removeItem("username");
      localStorage.removeItem("userID");
      setIsLoggedIn(false);
      navigate(0);
    } else {
      onLogin();
    }
  };

  const handleCreate = () => {

  }

  return (
    <div className="header__header">
      <div className="header__header-left">
        <img src={logo} alt="Tendit Logo" className="header__header-logo" />
        <p className="header__header-title">Tendit</p>
      </div>
      <div className="header__header-right">
        {isLoggedIn && (
          <p className="header__header-create-post" onClick={handleCreate}>Create</p>
        )}
        <p className="header__header-login-logout" onClick={handleLoginLogout}>
          {isLoggedIn ? "Logout" : "Login"}
        </p>
      </div>
    </div>
  );
};

export default Header;
