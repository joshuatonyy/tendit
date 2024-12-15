import React, { useState, useEffect } from "react";
import "./PostPage.css";
import Header from "../../components/Header/Header";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { useGetPostByPostID } from "../../usePost";
import { useParams } from "react-router-dom";
import CommentList from "../../components/CommentList/CommentList";

export const PostPage = () => {
  const { postID } = useParams();
  const [isAuthFormVisible, setIsAuthFormVisible] = useState(false);

  const { data: post, isLoading, isError, error } = useGetPostByPostID(postID);

  const handleLogin = () => {
    setIsAuthFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsAuthFormVisible(false);
  };

  const comments = [
    { user_id: "john_doe", comment_content: "Great post!", date: "2024-12-16" },
    {
      user_id: "jane_smith",
      comment_content: "Very informative, thanks for sharing!",
      date: "2024-12-16",
    },
  ];

  return (
    <div className="postpage__container-global">
      <Header onLogin={handleLogin} />
      <div className="postpage__container">
        {post && (
          <>
            <div className="postpage__details">
              <p className="postpage__username">@{post.user_id}</p>
              {/* <p className="postpage__createdate">Today</p>{" "} */}
            </div>
            <div className="postpage__content">
              <div className="postpage__content-title">{post.post_title}</div>
              <div className="postpage__content-content">
                {post.post_content}
              </div>
            </div>
          </>
        )}

        <div className="postpage__comment">
          <textarea
            className="postpage__comment-input postpage__comment-input--content"
            placeholder="Enter your comments here...."
          />
          <div className="postpage__comment-submit-container">
            <div className="postpage__comment-submit-button" onClick={() => {}}>
              Post
            </div>
          </div>
          <div className="postpage__comment-comments">
            <CommentList comments={comments} />
          </div>
        </div>

        {isAuthFormVisible && <AuthForm onClose={handleCloseForm} />}
      </div>
    </div>
  );
};

export default PostPage;
