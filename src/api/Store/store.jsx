import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './postsSlice'; // Убраны фигурные скобки

export const postsStore = configureStore({
  reducer: {
    posts: postsReducer
  }
});