import { useEffect } from "react";
import { MOVIE_API_OPTIONs } from "../constants/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingMovie,
  emptyList,
  addPopularMovie,
  addTopRatedMovie,
  addUpcomingMovie,
} from "../util/movieSlice";

const useMovieList = async () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovie);
  const popularMovies = useSelector((store) => store.movie.popularMovie);
  const topRatedMovies = useSelector((store) => store.movie.topRatedMovie);
  const upcomingMovies = useSelector((store) => store.movie.upcomingMovie);

  useEffect(() => {
    !nowPlayingMovies.length && getNowPlaying();
    !popularMovies.length && getPopular();
    !topRatedMovies.length && getTopRated();
    !upcomingMovies.length && getUpcoming();
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
