import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { deletePost, fetchPosts } from '../middleware/posts';
import { IPost } from '../../interfaces/interfaces';

export type ResponseType = 'idle' | 'loading' | 'success' | 'error';

const initialState = {
  posts: [] as IPost[],
  status: 'idle' as ResponseType,
};

export const { reducer, actions } = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetching
      .addCase(fetchPosts.fulfilled, (state, { payload }) => {
        state.posts = payload;
        state.status = 'success';
      })
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = 'error';
      })
      //   deleting
      .addCase(deletePost.fulfilled, (state, { payload }) => {
        const findIndex = state.posts.findIndex((post) => post.id === payload.id);
        if (findIndex > -1) {
          state.posts.splice(findIndex, 1);
        }
        state.status = 'success';
      })
      .addCase(deletePost.pending, (state) => {
        state.status = 'loading';
      });
  },
});

export const postsReducer = reducer;
export const postsActions = {
  ...actions,
};
