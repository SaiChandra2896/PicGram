import { useState } from "react";

import "./Post.css";

const Post = ({ post }) => {
  const [comment, setComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  const writeComment = (e) => {
    setComment(e.target.value);
  };

  const toggleLike = () => {
    if (isLiked) setIsLiked(false);
    else setIsLiked(true);
  };
  return (
    <section className="post-container">
      <div className="image-container">
        <img alt="post-display" src={post.url} />
      </div>
      <div className="info-container">
        <div className="like-container">
          <p className="likes">{post.likes}</p>
          <p className="like-button" onClick={toggleLike}>
            {isLiked ? "unlike" : "like"}
          </p>
        </div>
        <p>{post.category}</p>
      </div>
      <div className="comment-container">
        <input
          value={comment}
          placeholder="Type your comment here"
          onChange={writeComment}
        />
        <button>Post</button>
      </div>
      <div className="comments-container"></div>
    </section>
  );
};

export default Post;
