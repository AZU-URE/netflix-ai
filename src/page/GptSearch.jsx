import React from "react";
import GptSearchBar from "../component/GptSearchBar";
import GptMovieSuggestion from "../component/GptMovieSuggestion";
import Header from "../component/Header";
import { netflixBg } from "../constants/constant";
function GptSearch() {
  return (
    <div className="relative w-full h-screen ">
      <Header />
      <img
        src={netflixBg}
        alt="background"
        className="object-cover w-full h-full absolute -z-10 "
      />
      <div className="w-full h-full flex flex-col items-center justify-start pt-[10%]">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
}

export default GptSearch;
