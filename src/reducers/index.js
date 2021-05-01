import { combineReducers } from "redux";
import { postsReducer, filterReducer } from "./reducer";

export default combineReducers({ postsReducer, filterReducer });
