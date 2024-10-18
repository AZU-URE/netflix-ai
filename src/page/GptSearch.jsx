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
        className="object-cover w-full h-full  -z-10 fixed "
      />
      <div
        className={`w-full h-full flex flex-col items-center  space-y-[2rem]  ${
          moviesList.length === 0 || loading
            ? " justify-start xl:pt-[10%] md:pt-[15%] pt-[20%]"
            : "xl:justify-end justify-start xl:pb-[1.5rem] xl:pt-0 md:pt-[15%] pt-[20%] pb-1"
        } `}
      >
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
}

export default GptSearch;
