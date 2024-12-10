import React, { useState } from "react";
import "./ThreadPage.css";
import Header from "../../components/Header/Header";
import AppleTextfield from "../../components/AppleTextfield/AppleTextfield";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export const ThreadPage = () => {
  const [titleValue, setTitleValue] = useState("");
  const [isAuthFormVisible, setIsAuthFormVisible] = useState(false);

  const handleLogin = () => {
    setIsAuthFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsAuthFormVisible(false);
  };

  const handlePost = () => {};

  return (
    <div className="threadpage__container">
      <Header onLogin={handleLogin} />

      <div className="threadpage__header">
        <p className="threadpage__header-title">Create a post</p>
      </div>

      <div className="threadpage__post-body">
        <AppleTextfield
          id="title"
          label="Title"
          type="text"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          required
        />

        <textarea
          className="threadpage__post-input threadpage__post-input--content"
          placeholder="Share your thoughts here...."
        />

        <div className="postscard__actions">
          <button className="postscard__icon-button">
            <FaThumbsUp className="postscard__icon" />
          </button>
          <button className="postscard__icon-button">
            <FaThumbsDown className="postscard__icon" />
          </button>
        </div>

        <div className="threadpage__submit-container">
          <div className="threadpage__submit-post" onClick={handlePost}>
            Post
          </div>
        </div>
      </div>

      {isAuthFormVisible && <AuthForm onClose={handleCloseForm} />}
    </div>
  );
};
