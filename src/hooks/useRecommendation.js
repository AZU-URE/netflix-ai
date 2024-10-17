import { model } from "../util/geminiConfig";
import { useDispatch } from "react-redux";
import {
  addMovieDetails,
  setLoadingRecommendations,
} from "../util/recommendationSlice";
import { MOVIE_API_OPTIONs } from "../constants/constant";
export default function useRecommendation() {
  const dispatch = useDispatch();

  async function getRecommendation(searchQuery) {
    if (searchQuery !== "") {
      try {
        dispatch(setLoadingRecommendations(true));
        // console.log("hii");

        const query =
          "Act as a movie recommnetdation system from now.Your task is to suggest names of 5 movies seperated by comma which follows the given criteria." +
          searchQuery +
          "an example to show how the text needs to be given in response. example: movieName,movieName,movieName,movieName,movieName . Make sure you return 5 movies names seperate just by a comma and nothing else please.";
        const result = await model.generateContent(query);
        const response = result.response.text();
        const moviesName = response.split(",");
        console.log(moviesName);
        const promiseArr = moviesName.map((movie) => getMovieDetail(movie));
        const moviesDetails = await Promise.all(promiseArr);
        console.log(moviesDetails);
        dispatch(addMovieDetails({ moviesName, moviesDetails }));
      } catch (error) {
        // console.log(error);
        alert(error.message);
      } finally {
        dispatch(setLoadingRecommendations(false));
        // console.log("hii2");
      }
    } else {
      alert("Search for something that's on your mind..");
    }
  }

  async function getMovieDetail(movie) {
    const URL = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1';`;
    try {
      const response = await fetch(URL, MOVIE_API_OPTIONs);
      const json = await response.json();
      //   console.log(json);
      return json;
    } catch (error) {
      alert(error.message);
    }
  }

  return { getRecommendation };
}
