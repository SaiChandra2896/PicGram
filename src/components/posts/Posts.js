import { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getPosts } from "../../actions/posts";

import Post from "../post/Post";

import "./Posts.css";
import Modal from "../modal/Modal";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const updateUrl = (val) => {
    console.log("yess");
    setImgUrl(val);
  };

  return loading ? (
    <h1>loading</h1>
  ) : (
    <>
      <Modal imgUrl={imgUrl} updateUrl={updateUrl} />
      <section className="posts-container">
        {posts.map((post) => (
          <>
            <Post post={post} key={post.id} updateUrl={updateUrl} />
          </>
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
