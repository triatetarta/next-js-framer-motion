import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cursorText: '',
  cursorVariant: 'default',
};

export const cursorSlice = createSlice({
  name: 'cursor',
  initialState,
  reducers: {
    setCursor(state, action) {
      const { cursorText, cursorVariant } = action.payload;
      state.cursorText = cursorText;
      state.cursorVariant = cursorVariant;
    },
  },
});

export const { setCursor } = cursorSlice.actions;

export default cursorSlice.reducer;
