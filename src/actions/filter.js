import {
  FILTER_MOST_LIKED,
  FILTER_MOST_COMMENTED,
  FILTER_BY_SEARCH,
} from "./types";

export const filterByLikes = () => (dispatch) => {
  dispatch({
    type: FILTER_MOST_LIKED,
  });
};

export const filterByComments = () => (dispatch) => {
  dispatch({
    type: FILTER_MOST_COMMENTED,
  });
};

export const filterBySearch = (searchTerm) => (dispatch) => {
  console.log("yeyy");
  dispatch({
    type: FILTER_BY_SEARCH,
    payload: searchTerm,
  });
};
