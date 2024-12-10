import React from "react";
import "./PostPage.css";

export const PostPage = () => {
  return (
    <div className="postpage__container">
      <div className="postpage__details">
        <p className="postpage__username">@ten10</p>
        <p className="postpage__createdate">Today</p>
      </div>
      <div className="postpage__content">
        <div className="postpage__content-title">Is this real chat?</div>
        <div className="postpage__content-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>

      <div className="postpage__comment">
        <textarea
          className="postpage__comment-input postpage__comment-input--content"
          placeholder="Enter your comments here...."
        />
        <div className="postpage__comment-comments">
          {/* Add comment widget */}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
