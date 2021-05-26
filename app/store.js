import { configureStore } from '@reduxjs/toolkit';
import cursorReducer from '../slices/cursorSlice';

export const store = configureStore({
  reducer: {
    cursor: cursorReducer,
  },
});
