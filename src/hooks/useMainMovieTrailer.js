import { MOVIE_API_OPTIONs } from "../constants/constant";
import { setMainMovieTrailerKey } from "../util/movieSlice";
import { useDispatch } from "react-redux";

const useMainMovieTrailer = (movieId) => {
  console.log("trailer");
  const dispatch = useDispatch();

  // console.log(movieId);
  const getTrailer = async () => {
    // console.log(movieId);
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    const data = await fetch(url, MOVIE_API_OPTIONs);
    const json = await data.json();
    // console.log(json);
    const trailers = json?.results.find((el) => el.type === "Trailer");
    console.log(trailers);

    trailers.length
      ? dispatch(setMainMovieTrailerKey(trailers[0]?.key))
      : dispatch(setMainMovieTrailerKey(json?.results[0]?.key));
  };
  getTrailer();
};

export default useMainMovieTrailer;
