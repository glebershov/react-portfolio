import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Post } from "./types";

export const fetchPosts = createAsyncThunk<Post[], void>('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return (await response.json()) as Post[];
});