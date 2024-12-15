import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import PostsCard from "../../components/PostsCard/PostsCard";
import Header from "../../components/Header/Header";
import { useGetAllPosts } from "../../usePost";

export const HomePage = () => {
  const [isAuthFormVisible, setIsAuthFormVisible] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState("");

  const getAllPostsMutation = useGetAllPosts();

  const { data: posts, isLoading, isError, error } = useGetAllPosts();

  useEffect(() => {
    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("userID");
    setIsLoggedIn(!!username && !!userId);
    setLoggedInUsername(username);
  }, []);

  const handleLogin = () => {
    setIsAuthFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsAuthFormVisible(false);
  };

  return (
    <div className="homepage__container">
      <Header onLogin={handleLogin} />

      <div className="homepage__posts">
      { !posts || posts.length === 0 ? ( 
          <p>No posts available</p>
        ) : (
          posts.map((post) => (
            <PostsCard
              key={post.post_id}
              post={post}
              handleClick={() => {}}
            />
          ))
        )}
      </div>

      {isAuthFormVisible && <AuthForm onClose={handleCloseForm} />}
    </div>
  );
};
