import { useState } from "react";

import "./FilterSection.css";

const FilterSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterByLike = () => {
    console.log("like filter");
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
        />
      </div>
    </section>
  );
};

export default FilterSection;
