import React from "react";
import { MOVIE_POSTER } from "../constants/constant";
function MovieCard({ name, poster }) {
  return (
    <div className="w-[10rem] mr-[2rem] ">
      <img src={MOVIE_POSTER + poster} alt={name} className="w-full"></img>
      {/* <h2>{name}</h2> */}
    </div>
  );
}

export default MovieCard;
