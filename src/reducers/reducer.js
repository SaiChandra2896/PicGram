import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  FILTER_MOST_LIKED,
  FILTER_MOST_COMMENTED,
  FILTER_BY_SEARCH,
} from "../actions/types";

const initialState = {
  posts: [],
  loading: true,
  error: {},
};

export const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const filterReducer = (state = initialState, action) => {
  return state;
};
