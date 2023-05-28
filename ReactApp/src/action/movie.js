import * as types from "../constant/actionTypes";
import { deleteRequest, getRequest, postRequest } from "../services/apiCall";

const getMovieList = (movieList) => ({
  type: types.GET_MOVIE_LIST,
  payload: movieList,
});

export const loadMovieList = () => async (dispatch) => {
  try {
    const response = await getRequest("movieLists");
    dispatch(getMovieList(response.data));
  } catch (error) {
    console.log("error");
  }
};

