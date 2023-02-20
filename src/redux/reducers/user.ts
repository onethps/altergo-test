import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
};

export const { reducer, actions } = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authUser(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const userReducer = reducer;
export const userActions = {
  ...actions,
};
