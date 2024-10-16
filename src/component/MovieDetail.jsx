import React from "react";

function MainMovieCard({ title, description }) {
  return (
    <div className="absolute w-full top-0 pt-[15%] pl-[7rem] text-white aspect-video bg-gradient-to-r from-black/80">
      <h1 className="text-[4rem] font-bold mb-[1rem] w-1/2 leading-tight">
        {title}
      </h1>
      <p className="w-[35%]">{description}</p>
      <div className="mt-[2rem] space-x-[1rem]">
        <button className="p-[0.5rem] px-[2.5rem] text-xl font-semibold rounded-md bg-white text-black">
          Play
        </button>
        <button className="p-[0.5rem] px-[2.5rem] text-xl font-semibold rounded-md bg-white/30 text-white">
          More Info
        </button>
      </div>
    </div>
  );
}

export default MainMovieCard;
