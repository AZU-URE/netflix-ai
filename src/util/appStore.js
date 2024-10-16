import { configureStore } from "@reduxjs/toolkit";
import USER_REDUCER from "./userSlice";
import Movie_REDUCER from "./movieSlice";
const appStore = configureStore({
  reducer: {
    user: USER_REDUCER,
    movie: Movie_REDUCER,
  },
});

export default appStore;
