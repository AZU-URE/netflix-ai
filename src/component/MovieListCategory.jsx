import React from "react";
import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";
function MovieListCategory({ title, movies }) {
  // console.log(movies);
  if (movies === null) {
    return <Shimmer />;
  }
  return (
    <div className=" w-full pl-[3rem]">
      <h1 className="text-3xl text-white mb-[1rem] font-medium">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-none ">
        <div className="flex space-x-[2rem] ">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              name={movie.original_title}
              poster={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieListCategory;
