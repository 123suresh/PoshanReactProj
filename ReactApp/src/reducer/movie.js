import * as types from "../constant/actionTypes";

const initialState = {
  movieList: [],
  watchList: [],
};

const movieInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.payload,
      };
    default:
      return state;
  }
};

export default movieInfo;
