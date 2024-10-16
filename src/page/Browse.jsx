import React from "react";
import Header from "../component/Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import VideoBanner from "../component/VideoBanner";
function Browse() {
  useNowPlayingMovie();

  return (
    <div className="w-full">
      <Header />
      <VideoBanner />
    </div>
  );
}

export default Browse;
