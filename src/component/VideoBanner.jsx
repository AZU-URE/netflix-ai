import React from "react";
import MovieDetail from "./MovieDetail";

import VideoBackground from "./VideoBackground";
import useMainMovieTrailer from "../hooks/useMainMovieTrailer";

function VideoBanner() {
  useMainMovieTrailer();
  return (
    <div className="w-full ">
      <VideoBackground />
      <MovieDetail />
    </div>
  );
}

export default VideoBanner;
