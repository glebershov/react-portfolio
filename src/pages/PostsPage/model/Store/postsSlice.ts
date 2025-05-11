import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchPosts} from '../../../../entities/post/index.ts';
import type {Post} from '../../../../entities/post/types.ts'


export interface PostState {
  allPosts: Post[],
  visiblePosts: Post[],
  likedPosts: number[],
  showLiked: boolean,
  loading: boolean,
  Error: null | string
}
const initialState: PostState = { //
  allPosts: [],
  visiblePosts: [],
  likedPosts: [],
  showLiked: false,
  loading: true,
  Error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    likePost: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      state.likedPosts.includes(postId)
        ? state.likedPosts = state.likedPosts.filter(id => id !== postId)
        : state.likedPosts.push(postId);
    },
    setShowLiked: (state, action: PayloadAction<boolean>) => {
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
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
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