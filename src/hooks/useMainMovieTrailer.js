import { useEffect } from "react";
import { MOVIE_API_OPTIONs } from "../constants/constant";
import { setMainMovieTrailerKey, setTrailerName } from "../util/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useMainMovieTrailer = () => {
  var nowPlaying = useSelector((store) => store.movie.nowPlayingMovie);
  const dispatch = useDispatch();
  useEffect(() => {
    nowPlaying.length !== 0 && getTrailer();
  }, [nowPlaying]);

  const getTrailer = async () => {
    const movie = nowPlaying[Math.floor(Math.random() * 20)];
    const { id, title, overview } = movie;
    dispatch(setTrailerName({ title, overview }));
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const data = await fetch(url, MOVIE_API_OPTIONs);
    const json = await data.json();

    const trailers = json?.results.find((el) => el.type === "Trailer");

    trailers.length
      ? dispatch(setMainMovieTrailerKey(trailers[0]?.key))
      : dispatch(setMainMovieTrailerKey(json?.results[0]?.key));
  };
};

export default useMainMovieTrailer;
