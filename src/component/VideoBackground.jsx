import React from "react";
import useMainMovieTrailer from "../hooks/useMainMovieTrailer";
import { useSelector } from "react-redux";
function VideoBackground({ id }) {
  useMainMovieTrailer(id);
  const key = useSelector((state) => state.movie.mainMovieTrailerKey);
  console.log(key);

  return (
    <div className="w-full  aspect-video ">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&rel=1&showinfo=0&controls=1&modestbranding=0`}
        title={id + " trailer"}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
