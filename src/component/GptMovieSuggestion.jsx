import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { suggestionMovieCard } from "./MovieCard";
import Shimmer from "./Shimmer";
function GptMovieSuggestion() {
  const SuggestionMovieCard = suggestionMovieCard(MovieCard);
  const moviesList = useSelector(
    (store) => store.recommendation.recommendedMovies
  );
  const loading = useSelector(
    (store) => store.recommendation.loadingRecommendations
  );
  // console.log(moviesList);
  if (loading)
    return (
      <div className="flex flex-col bg-black/80 w-[80%] justify-around relative">
        <p className="w-full font-bold text-center md:tracking-[0.5em] tracking-[0.2em] text-white text-[2rem] my-[0.25rem]">
          LOADING..
        </p>
        <div className="m-[2rem] mt-0">
          <Shimmer />
        </div>
      </div>
    );
  // if (moviesList.length === 0) return;
  return (
    moviesList.length !== 0 && (
      <div className="flex md:flex-row flex-col space-y-[1rem] md:space-y-0 md:space-x-[2rem] bg-black/80 xl:w-[80%] w-[90%] overflow-x-scroll scrollbar-none  justify-around xl:p-[2rem] p-[1rem]">
        {moviesList.map(
          (movie) =>
            movie && (
              <SuggestionMovieCard
                key={movie?.id}
                name={movie?.original_title || ""}
                poster={movie?.poster_path || ""}
              />
            )
        )}
      </div>
    )
  );
}

export default GptMovieSuggestion;
