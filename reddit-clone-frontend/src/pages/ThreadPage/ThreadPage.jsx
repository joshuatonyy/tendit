import React, { useState } from "react";
import "./ThreadPage.css";
import Header from "../../components/Header/Header";
import AppleTextfield from "../../components/AppleTextfield/AppleTextfield";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useCreatePost } from "../../usePost";

export const ThreadPage = () => {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [isAuthFormVisible, setIsAuthFormVisible] = useState(false);

  const { mutate: createPost, isLoading } = useCreatePost();

  const handleLogin = () => {
    setIsAuthFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsAuthFormVisible(false);
  };

  const handlePost = () => {
    if (!titleValue.trim() || !contentValue.trim()) {
      alert("Please fill in both the title and content.");
      return;
    }
    const userID = localStorage.getItem("userID");
    createPost(
      { post_title: titleValue, post_content: contentValue, user_id: userID},
      {
        onSuccess: () => {
          setTitleValue("");
          setContentValue("");
          alert("Post created successfully!");
        },
        onError: (error) => {
          alert("Error creating post: " + error.message);
        },
      }
    );
  };

  return (
    <div className="threadpage__container">
      <Header onLogin={handleLogin} isOnCreate={true} />

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
          value={contentValue}
          onChange={(e) => setContentValue(e.target.value)}
        />

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
