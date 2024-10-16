import React from "react";
import useMainMovieTrailer from "../hooks/useMainMovieTrailer";
import { useSelector } from "react-redux";
function VideoBackground({ id }) {
  useMainMovieTrailer(id);
  const key = useSelector((state) => state.movie.mainMovieTrailerKey);
  console.log(key);

  return (
    <div className="h-full w-full">
      <iframe
        className="w-full h-1/2"
        src={`https://www.youtube.com/embed/${key}`}
        title={id + " trailer"}
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
