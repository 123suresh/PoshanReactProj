import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "../dashboard/MovieList";
import PageNotFound from "../dashboard/PageNotFound";
import Login from "../login/Login";
import PrivateRoute from "./PrivateRouting";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/movieList" element={<MovieList />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default Routing;
