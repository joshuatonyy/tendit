import React from 'react';
import './CommentList.css';

const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return <p>No comments yet.</p>;
  }

  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <p className="comment__username">@{comment.user_id}</p>
          <p className="comment__content">{comment.comment_content}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
