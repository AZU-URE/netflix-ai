import React from "react";
import Header from "../component/Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import VideoBanner from "../component/VideoBanner";
function Browse() {
  useNowPlayingMovie();

  console.log("browse2");
  return (
    <div className="w-full h-full">
      <Header />
      <VideoBanner />
    </div>
  );
}

export default Browse;
