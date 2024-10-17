import { configureStore } from "@reduxjs/toolkit";
import USER_REDUCER from "./userSlice";
import Movie_REDUCER from "./movieSlice";
import CONFIG_REDUCER from "./configSlice";
import RECOMMENDATION_REDUCER from "./recommendationSlice";
const appStore = configureStore({
  reducer: {
    user: USER_REDUCER,
    movie: Movie_REDUCER,
    config: CONFIG_REDUCER,
    recommendation: RECOMMENDATION_REDUCER,
  },
});

export default appStore;
