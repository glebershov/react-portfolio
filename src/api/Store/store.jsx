import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './postsSlice';

export const postsStore = configureStore({
  reducer: {
    posts: postsReducer
  }
});
