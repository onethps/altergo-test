import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IPost } from '../../interfaces/interfaces';
import { postAPI } from '../../services/posts';

export const fetchPosts = createAsyncThunk<
  IPost[],
  { limit?: number },
  { rejectValue: string }
>('posts/fetchPosts', async ({ limit = 6 }, { rejectWithValue }) => {
  try {
    const posts = await postAPI.getPosts(limit);
    return posts.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return rejectWithValue(err.response?.data.message);
    }
    return rejectWithValue('Something wrong, cities not fetched');
  }
});
