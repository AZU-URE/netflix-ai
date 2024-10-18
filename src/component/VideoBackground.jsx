import React from "react";
import useMainMovieTrailer from "../hooks/useMainMovieTrailer";
import { useSelector } from "react-redux";
function VideoBackground() {
  const key = useSelector((state) => state.movie.mainMovieTrailerKey);
  // console.log(key);
  if (key === null) return;
  return (
    <div className="w-full aspect-video md:pt-0 pt-[3.5rem] ">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&rel=1&showinfo=0&controls=1&modestbranding=0`}
        title={" trailer"}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
