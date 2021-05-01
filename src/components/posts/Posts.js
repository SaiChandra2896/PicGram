import Post from "../post/Post";

import "./Posts.css";

const Posts = ({ posts }) => {
  console.log(posts, "posts comp");
  return (
    <section className="posts-container">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </section>
  );
};

export default Posts;
