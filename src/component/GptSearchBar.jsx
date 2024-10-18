import React from "react";
import { lang } from "../constants/LangVariables";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import useRecommendation from "../hooks/useRecommendation";
import { setSearchInput } from "../util/recommendationSlice";
function GptSearchBar() {
  const { getRecommendation } = useRecommendation();
  const dispatch = useDispatch();
  const code = useSelector((store) => store.config.lang);
  const searchInput = useSelector((store) => store.recommendation.searchInput);
  const onSearch = async (e) => {
    e.preventDefault();
    getRecommendation(e.target.search.value);
  };
  return (
    <div className="lg:w-2/3 w-[90%] bg-black/70 xl:p-[1.5rem] md:p-[1rem] p-[0.5rem]">
      <form className="flex md:space-x-[1rem] space-x-2" onSubmit={onSearch}>
        <input
          type="text"
          name="search"
          value={searchInput || ""}
          placeholder={lang[code].searchPlaceholder}
          onChange={(e) => dispatch(setSearchInput(e.target.value))}
          className="w-full md:p-[1rem] p-[0.25rem] rounded-sm"
        ></input>
        <button className="text-white bg-netflixRed md:w-[18%] w-[25%] rounded-sm md:text-lg text-sm font-medium md:tracking-widest uppercase">
          {lang[code].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
