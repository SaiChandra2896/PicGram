import { FILTER_MOST_LIKED, FILTER_MOST_COMMENTED } from "./types";

export const filterByLikes = () => (dispatch) => {
  console.log("yes");
  dispatch({
    type: FILTER_MOST_LIKED,
  });
};

export const filterByComments = () => (dispatch) => {
  console.log("got");
  dispatch({
    type: FILTER_MOST_COMMENTED,
  });
};
