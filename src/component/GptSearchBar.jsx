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
    <div className="w-2/3 bg-black/70 p-[1.5rem]">
      <form className="flex space-x-[1rem]" onSubmit={onSearch}>
        <input
          type="text"
          name="search"
          value={searchInput || ""}
          placeholder={lang[code].searchPlaceholder}
          onChange={(e) => dispatch(setSearchInput(e.target.value))}
          className="w-full p-[1rem] rounded-sm"
        ></input>
        <button className="text-white bg-netflixRed w-[18%] rounded-sm text-lg font-medium tracking-widest uppercase">
          {lang[code].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
