import axios from "axios";

export const getRequest = (url) => {
  const getMovieList = axios.get(`${process.env.REACT_APP_API}/${url}`);
  return getMovieList;
};
