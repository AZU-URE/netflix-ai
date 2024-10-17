import React from "react";
import { MOVIE_POSTER } from "../constants/constant";
function MovieCard({ name, poster }) {
  return (
    <div className="w-[10rem]">
      <img src={MOVIE_POSTER + poster} alt={name} className="w-full"></img>
      {/* <h2>{name}</h2> */}
    </div>
  );
}

export function suggestionMovieCard(MovieCard) {
  const SuggestionMovieCard = ({ name, poster }) => {
    return (
      <div className="flex flex-col p-[1rem] items-center justify-start bg-slate-50/20 space-y-[0.5rem]   ">
        <MovieCard name={name} poster={poster} />
        <p className="text-white text-lg text-center w-[10rem] font-sans">
          {name}
        </p>
      </div>
    );
  };
  return SuggestionMovieCard;
}

export default MovieCard;
