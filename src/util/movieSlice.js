import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: [],
    mainMovieDetail: {},
    mainMovieTrailerKey: null,
  },
  reducers: {
    addMovie: (state, action) => {
      state.nowPlayingMovie = [...state.nowPlayingMovie, ...action.payload];
    },
    emptyList: (state) => {
      state.nowPlayingMovie = [];
    },
    setMainMovieDetail: (state, action) => {
      state.mainMovieDetail = action.payload;
    },
    setMainMovieTrailerKey: (state, action) => {
      state.mainMovieTrailerKey = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  addMovie,
  emptyList,
  setMainMovieDetail,
  setMainMovieTrailerKey,
} = movieSlice.actions;
