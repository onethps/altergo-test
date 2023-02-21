import { combineReducers } from '@reduxjs/toolkit';

import { postsReducer } from './reducers/posts';
import { userReducer } from './reducers/user';

export const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer,
});
