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
      state.nowPlayingMovie = action.payload;
    },
    emptyList: (state) => {
      state.nowPlayingMovie = [];
      state.popularMovie = [];
      state.topRatedMovie = [];
      state.upcomingMovie = [];
    },
    setMainMovieTrailerKey: (state, action) => {
      state.mainMovieTrailerKey = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovie = action.payload;
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
