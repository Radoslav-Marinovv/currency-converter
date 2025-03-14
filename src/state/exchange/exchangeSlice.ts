import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ExchangeState {
  [key: string]: number;
}

const initialState: ExchangeState = {};

const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    setExchangeRate: (
      state,
      action: PayloadAction<{ id: string; value: number }>
    ) => {
      const { id, value } = action.payload;
      state[id] = value;
    },
  },
});

export const { setExchangeRate } = exchangeSlice.actions;
export default exchangeSlice.reducer;
