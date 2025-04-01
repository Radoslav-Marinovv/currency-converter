import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const myListSlice = createSlice({
  name: 'myList',
  initialState: localStorage.getItem('myList')?.split(',') || [],
  reducers: {
    addToMyList: (state, action: PayloadAction<{ id: string }>) => {
      state.push(action.payload.id);
    },
    removeFromMyList: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter((item) => item !== action.payload.id);
    },
  },
});

export const { addToMyList, removeFromMyList } = myListSlice.actions;
export const myListReducer = myListSlice.reducer;
