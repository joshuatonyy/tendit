import React, { useState } from "react";
import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import "./AuthForm.css";
import AppleTextfield from "../AppleTextfield/AppleTextfield";

export const AuthForm = ({ onClose }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {};

  return (
    <div className="authform__overlay">
      <div className="authform__container">
        <div className="authform__header">
          <p className="authform__header-text">Login</p>
          <button className="authform__header-close-button" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="authform__entries">
          <AppleTextfield
            id="email"
            label="email"
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            required
          />

          <AppleTextfield
            id="password"
            label="password"
            type="password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            required
          />
        </div>

        {errorMessage && (
          <div className="authform__error-message">{errorMessage}</div>
        )}

        <div className="authform__submit-container">
          <div className="authform__submit-login" onClick={handleLogin}>
            Login
          </div>
        </div>

        <div className="authform__bottom-message">
          New to Tendit?{" "}
          <span>
            <Link to="/">Register.</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
