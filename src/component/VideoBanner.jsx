import React from "react";
import MovieDetail from "./MovieDetail";

import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

function VideoBanner() {
  var nowPlaying = useSelector((store) => store.movie.nowPlayingMovie);
  if (nowPlaying.length === 0) return;
  const movie = nowPlaying[Math.floor(Math.random() * 20)];

  const { id, title, overview } = movie;

  return (
    <div className="w-full">
      <VideoBackground id={id} />
      <MovieDetail title={title} description={overview} />
    </div>
  );
}

export default VideoBanner;
