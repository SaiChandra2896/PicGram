import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getPosts } from "../../actions/posts";

import Post from "../post/Post";

import "./Posts.css";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

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

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    post: state.postsReducer,
  };
};

export default connect(mapStateToProps, { getPosts })(Posts);
