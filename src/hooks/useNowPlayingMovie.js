import { useEffect } from "react";
import { MOVIE_API_OPTIONs } from "../constants/constant";
import { useDispatch } from "react-redux";
import { addMovie, emptyList } from "../util/movieSlice";

const useNowPlayingMovie = async () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlaying();
    // useMainMovieTrailer();
    return () => dispatch(emptyList());
  }, []);

  const getNowPlaying = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US";
    const data = await fetch(url, MOVIE_API_OPTIONs);
    const json = await data.json();
    dispatch(addMovie(json.results));
  };
};

export default useNowPlayingMovie;
