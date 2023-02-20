import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
};

export const { reducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser: (state) => {
      state.isAuth = true;
    },
  },
});

export const authReducer = reducer;
export const authActions = {
  ...actions,
};
