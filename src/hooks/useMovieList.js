import { useEffect } from "react";
import { MOVIE_API_OPTIONs } from "../constants/constant";
import { useDispatch } from "react-redux";
import {
  addNowPlayingMovie,
  emptyList,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
} from "../util/movieSlice";

const useMovieList = async () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlaying();
    getPopular();
    getTopRated();
    getUpcoming();
    return () => dispatch(emptyList());
  }, []);

  const getNowPlaying = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US";
    const data = await fetch(url, MOVIE_API_OPTIONs);
    const json = await data.json();
    dispatch(addNowPlayingMovie(json.results));
  };

  const getPopular = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?page=1&language=en-US";
    const data = await fetch(url, MOVIE_API_OPTIONs);
    const json = await data.json();
    dispatch(addPopularMovie(json.results));
  };

  const getTopRated = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US";
    const data = await fetch(url, MOVIE_API_OPTIONs);
    const json = await data.json();
    dispatch(addTopRatedMovie(json.results));
  };

  const getUpcoming = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?page=1&language=en-US";
    const data = await fetch(url, MOVIE_API_OPTIONs);
    const json = await data.json();
    dispatch(addUpcomingMovie(json.results));
  };
};

export default useMovieList;
