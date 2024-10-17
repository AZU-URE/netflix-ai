import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { suggestionMovieCard } from "./MovieCard";
function GptMovieSuggestion() {
  const SuggestionMovieCard = suggestionMovieCard(MovieCard);
  const moviesList = useSelector(
    (store) => store.recommendation.recommendedMovies
  );
  const loading = useSelector(
    (store) => store.recommendation.loadingRecommendations
  );
  // console.log(moviesList);
  if (loading) return <p className="mt-[2rem] text-white text-xl">Loading</p>;
  // if (moviesList.length === 0) return;
  return (
    moviesList.length !== 0 && (
      <div className="flex space-x-[2rem] bg-black/80 w-[80%] justify-around p-[2rem]">
        {moviesList.map((movie) => (
          <SuggestionMovieCard
            key={movie?.id}
            name={movie?.original_title || ""}
            poster={movie?.poster_path || ""}
          />
        ))}
      </div>
    )
  );
}

export default GptMovieSuggestion;
