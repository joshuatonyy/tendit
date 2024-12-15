// import React from "react";
// import "./PostsCard.css";
// import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

// export const PostsCard = ({ handleClick = () => {} }) => {
//   return (
//     <div className="postscard__container" onClick={handleClick}>
//       <div className="postscard__card-details">
//         <p className="postscard__username">@ten10</p>
//         <p className="postscard__createdate">Today</p>
//       </div>
//       <div className="postscard__title">Is this real chat?</div>
//       <div className="postscard__content">
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries, but also the leap into electronic typesetting, remaining
//         essentially unchanged.
//       </div>
//       <div className="postscard__actions">
//         <button className="postscard__icon-button">
//           <FaThumbsUp className="postscard__icon" />
//         </button>
//         <button className="postscard__icon-button">
//           <FaThumbsDown className="postscard__icon" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PostsCard;


import React from "react";
import "./PostsCard.css";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export const PostsCard = ({ post, handleClick = () => {}, username = "anon" }) => {
  return (
    <div className="postscard__container" onClick={() => handleClick(post)}>
      <div className="postscard__card-details">
        <p className="postscard__username">@{username}</p>
        {/* <p className="postscard__createdate">{post.createdAt}</p> */}
      </div>
      <div className="postscard__title">{post.post_title}</div>
      <div className="postscard__content">{post.post_content}</div>
      {/* <div className="postscard__actions">
        <button className="postscard__icon-button">
          <FaThumbsUp className="postscard__icon" />
        </button>
        <button className="postscard__icon-button">
          <FaThumbsDown className="postscard__icon" />
        </button>
      </div> */}
    </div>
  );
};

export default PostsCard;
