import React from "react";
import GptSearchBar from "../component/GptSearchBar";
import GptMovieSuggestion from "../component/GptMovieSuggestion";
import Header from "../component/Header";
import { netflixBg } from "../constants/constant";
import { useSelector } from "react-redux";
function GptSearch() {
  const moviesList = useSelector(
    (store) => store.recommendation.recommendedMovies
  );
  const loading = useSelector(
    (store) => store.recommendation.loadingRecommendations
  );
  return (
    <div className="relative w-full h-screen ">
      <Header />
      <img
        src={netflixBg}
        alt="background"
        className="object-cover w-full h-full absolute -z-10 "
      />
      <div
        className={`w-full h-full flex flex-col items-center  space-y-[2rem]  ${
          moviesList.length === 0 || loading
            ? " justify-start p-[10%]"
            : "justify-end pb-[1.5rem]"
        } `}
      >
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
}

export default GptSearch;
