import React, { useState } from "react";
import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import "./AuthForm.css";
import AppleTextfield from "../AppleTextfield/AppleTextfield";
import { useLogin, useRegister } from "../../useAuth";

export const AuthForm = ({ onClose }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [usernameValue, setUsernameValue] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const loginMutation = useLogin();
  const registerMutation = useRegister();

  const handleAuth = async () => {
    try {
      if (isRegisterMode) {
        await registerMutation.mutateAsync({
          email: emailValue,
          username: usernameValue,
          password: passwordValue,
        });
        setErrorMessage("");
        setSuccessMessage("Register success!");
      } else {
        await loginMutation.mutateAsync({
          email: emailValue,
          password: passwordValue,
        });
        setErrorMessage("");
        setSuccessMessage("Login success!");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="authform__overlay">
      <div className="authform__container">
        <div className="authform__header">
          <p className="authform__header-text">
            {isRegisterMode ? "Register" : "Login"}
          </p>
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

          {isRegisterMode && (
            <AppleTextfield
              id="username"
              label="username"
              type="text"
              value={usernameValue}
              onChange={(e) => setUsernameValue(e.target.value)}
              required
            />
          )}

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

        {successMessage && (
          <div className="authform__success-message">{successMessage}</div>
        )}

        <div className="authform__submit-container">
          <div className="authform__submit-login" onClick={handleAuth}>
            {isRegisterMode ? "Register" : "Login"}
          </div>
        </div>

        <div className="authform__bottom-message">
          {isRegisterMode ? (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsRegisterMode(false)}>
                <Link to="#">Login.</Link>
              </span>
            </>
          ) : (
            <>
              New to Tendit?{" "}
              <span onClick={() => setIsRegisterMode(true)}>
                <Link to="#">Register.</Link>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
