import { createSlice } from "@reduxjs/toolkit";

export const recommendationSlice = createSlice({
  name: "recommendation",
  initialState: {
    recommendedMovies: [],
    recommendedMovieNames: null,
    searchInput: null,
    loadingRecommendations: false,
  },
  reducers: {
    addMovieDetails: (state, action) => {
      const { moviesName, moviesDetails } = action.payload;
      state.recommendedMovieNames = moviesName;
      const movieList = moviesDetails.map((movie) =>
        movie.results.find((el, index) => index === 0 && el !== null)
      );
      state.recommendedMovies = movieList;
    },
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setLoadingRecommendations: (state, action) => {
      state.loadingRecommendations = action.payload;
    },
  },
});

export const { addMovieDetails, setSearchInput, setLoadingRecommendations } =
  recommendationSlice.actions;
export default recommendationSlice.reducer;
