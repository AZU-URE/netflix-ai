import React from "react";
import Header from "../component/Header";
import useMovieList from "../hooks/useMovieList";
import VideoBanner from "../component/VideoBanner";
import MovieListContainer from "../component/MovieListContainer";
function Browse() {
  useMovieList();

  return (
    <div className="w-full">
      <Header />
      <VideoBanner />
      <MovieListContainer />
    </div>
  );
}

export default Browse;
