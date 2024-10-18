import React from "react";
import { useSelector } from "react-redux";
function MovieDetail() {
  const trailer = useSelector((store) => store.movie.trailerName);
  return (
    <div className="xl:absolute w-full top-0 xl:pt-[10%] md:py-[4%] py-[6%] xl:pl-[7rem] md:pl-[3rem] pl-[1rem] text-white xl:aspect-video bg-black xl:bg-transparent xl:bg-gradient-to-r xl:from-black/80">
      <h1 className="xl:text-[4rem] md:text-[2rem] text-[1.5rem] font-bold md:mb-[1rem] mb-[0.5rem] xl:w-1/2 w-full leading-tight">
        {trailer.title}
      </h1>
      <p className="xl:w-[35%] w-[90%] ">{trailer.overview}</p>
      {/* <div className="md:mt-[1rem] mt-[0.75rem] space-x-[1rem]">
        <button className="p-[0.5rem] px-[2.5rem] md:text-xl text-base font-semibold rounded-md bg-white text-black">
          Play
        </button>
        <button className="p-[0.5rem] px-[2.5rem] md:text-xl text-base font-semibold rounded-md bg-white/30 text-white">
          More Info
        </button>
      </div> */}
    </div>
  );
}

export default MovieDetail;
