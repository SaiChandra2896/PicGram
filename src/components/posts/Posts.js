import { connect } from "react-redux";
import propTypes from "prop-types";

import Post from "../post/Post";

import "./Posts.css";

const Posts = ({ post: { posts, loading } }) => {
  return loading ? (
    <h1>loading</h1>
  ) : (
    <>
      <section className="posts-container">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  post: state.postsReducer,
});

export default connect(mapStateToProps)(Posts);
