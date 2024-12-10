import React, { useState } from "react";
import "./HomePage.css";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import PostsCard from "../../components/PostsCard/PostsCard";
import Header from "../../components/Header/Header";

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
      <Header onLogin={handleLogin}/>

      <div className="homepage__posts">
        <PostsCard />
        <PostsCard />
        <PostsCard />
      </div>

      {isAuthFormVisible && <AuthForm onClose={handleCloseForm} />}
    </div>
  );
};
