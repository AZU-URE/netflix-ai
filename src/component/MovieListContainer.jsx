import React from "react";
import MovieListCategory from "./MovieListCategory";
import { useSelector } from "react-redux";
function MovieListContainer() {
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovie);
  const popularMovies = useSelector((store) => store.movie.popularMovie);
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovie);
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovie);
  return (
    <div className="bg-black">
      <div className="xl:-mt-[15rem] -mt-1 space-y-[3rem] z-10 relative">
        <MovieListCategory title={"Now In Theatre"} movies={nowPlayingMovies} />
        <MovieListCategory title={"Upcoming movies"} movies={upcomingMovies} />
        <MovieListCategory title={"Popular Movies"} movies={popularMovies} />
        <MovieListCategory title={"Top Rated Movies"} movies={topRatedMovies} />
      </div>
    </div>
  );
}

export default MovieListContainer;
