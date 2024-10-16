import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: [],
    mainMovieTrailerKey: null,
    popularMovie: [],
    upcomingMovie: [],
    topRatedMovie: [],
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = [...state.nowPlayingMovie, ...action.payload];
    },
    emptyList: (state) => {
      state.nowPlayingMovie = [];
    },
    setMainMovieTrailerKey: (state, action) => {
      state.mainMovieTrailerKey = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = [...state.popularMovie, ...action.payload];
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovie = [...state.upcomingMovie, ...action.payload];
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovie = [...state.topRatedMovie, ...action.payload];
    },
  },
});

export default movieSlice.reducer;
export const {
  addNowPlayingMovie,
  emptyList,
  setMainMovieTrailerKey,
  addPopularMovie,
  addUpcomingMovie,
  addTopRatedMovie,
} = movieSlice.actions;
