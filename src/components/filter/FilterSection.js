import { useState } from "react";

import "./FilterSection.css";

const FilterSection = ({ posts, updatePosts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterByLike = () => {
    posts.sort((a, b) => b.likes - a.likes);
    console.log(posts, "filterLikes");
    updatePosts(posts);
  };

  const filterByComment = () => {
    console.log("comment filter");
  };

  return (
    <section className="filter-section">
      <div className="likes-container">
        <p onClick={filterByLike} className="like-filters">
          Most Liked
        </p>{" "}
        |{" "}
        <p onClick={filterByComment} className="like-filters">
          Most Commented
        </p>
      </div>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={filterSearch}
          className="search-bar"
          placeholder="search images..."
        />
      </div>
    </section>
  );
};

export default FilterSection;
