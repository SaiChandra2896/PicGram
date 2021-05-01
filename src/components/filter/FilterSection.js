import { useState } from "react";

//redux
import { connect } from "react-redux";
import { filterByLikes, filterByComments } from "../../actions/filter";

import "./FilterSection.css";

const FilterSection = ({ filterByLikes, filterByComments }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className="filter-section">
      <div className="likes-container">
        <p onClick={() => filterByLikes()} className="like-filters">
          Most Liked
        </p>{" "}
        |{" "}
        <p onClick={() => filterByComments()} className="like-filters">
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

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { filterByLikes, filterByComments })(
  FilterSection
);
