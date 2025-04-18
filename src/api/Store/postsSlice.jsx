import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
});

const initialState = {
  allPosts: [],
  visiblePosts: [],
  likedPosts: [],
  showLiked: false,
  loading: true
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    likePost: (state, action) => {
      const postId = action.payload;
      state.likedPosts.includes(postId)
        ? state.likedPosts = state.likedPosts.filter(id => id !== postId)
        : state.likedPosts.push(postId);
    },
    setShowLiked: (state, action) => {
      state.showLiked = action.payload;
    },
    loadMore: (state) => {
      const currentLength = state.visiblePosts.length;
      state.visiblePosts = [
        ...state.visiblePosts,
        ...state.allPosts.slice(currentLength, currentLength + 10)
      ];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.allPosts = action.payload;
        state.visiblePosts = action.payload.slice(0, 12);
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = false;
      });
  }
});


export const { likePost, setShowLiked, loadMore } = postsSlice.actions;
export default postsSlice.reducer;