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
    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case FILTER_MOST_LIKED:
      return {
        ...state,
        posts: state.posts.sort((a, b) => b.likes - a.likes),
        loading: false,
        error: {},
      };
    case FILTER_MOST_COMMENTED:
      return {
        ...state,
        posts: state.posts.sort((a, b) => {
          return b.comments.length - a.comments.length;
        }),
        loading: false,
        error: {},
      };
    case FILTER_BY_SEARCH:
      return {
        ...state,
        posts: state.posts.filter((post) =>
          post.category.toLowerCase().includes(payload)
        ),
      };
    default:
      return state;
  }
};
