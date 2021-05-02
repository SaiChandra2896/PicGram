import { useState } from "react";

import "./Post.css";

const Post = ({ post, updateUrl }) => {
  const [comment, setComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [postState, setPostState] = useState(post);

  const writeComment = (e) => {
    setComment(e.target.value);
  };

  const toggleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setPostState({
        ...postState,
        likes: postState.likes + 1,
      });
    } else {
      setIsLiked(true);
      setPostState({
        ...postState,
        likes: postState.likes - 1,
      });
    }
  };

  const submitComment = () => {
    setPostState({
      ...postState,
      comments: [...postState.comments, comment],
    });
    setComment("");
  };

  return (
    <section className="post-container">
      <div className="image-container" onClick={() => updateUrl(postState.url)}>
        <img alt="post-display" src={postState.url} />
      </div>
      <div className="info-container">
        <div className="like-container">
          <p className="likes">{postState.likes}</p>
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
        <button onClick={submitComment}>Post</button>
      </div>
      <div className="comments-container">
        {postState.comments.map((comment, i) => (
          <p key={i}>{comment}</p>
        ))}
      </div>
    </section>
  );
};

export default Post;
