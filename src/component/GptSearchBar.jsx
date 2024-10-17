import React from "react";
import { lang } from "../constants/LangVariables";
import { useSelector } from "react-redux";

function GptSearchBar() {
  const code = useSelector((store) => store.config.lang);
  return (
    <div className="w-2/3 bg-black/70 p-[1.5rem]">
      <form className="flex space-x-[1rem]">
        <input
          type="text"
          placeholder={lang[code].searchPlaceholder}
          className="w-full p-[1rem] rounded-sm"
        ></input>
        <button className="text-white bg-netflixRed w-[15%] rounded-sm text-lg font-medium tracking-widest">
          {lang[code].search}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar;
