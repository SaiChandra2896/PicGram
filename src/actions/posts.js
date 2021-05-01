import axios from "axios";
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from "./types";

export const getPosts = () => async (dispatch) => {
  try {
    const resData = await axios.get(
      "https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json"
    );
    const postData = resData.data.pics;
    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: postData,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DATA_FAIL,
      payload: new Error(error),
    });
  }
};
