import "./Post.css";

const Post = ({ post }) => {
  return (
    <section className="post-container">
      <div className="image-container">
        <img alt="post-display" src={post.url} />
      </div>
      <div className="info-container">
        <div className="like-container">
          <p className="likes">{post.likes}</p>
          <p className="like-button">like</p>
        </div>
        <p>{post.category}</p>
      </div>
    </section>
  );
};

export default Post;
