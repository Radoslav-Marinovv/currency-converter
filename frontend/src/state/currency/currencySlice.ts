import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllCurrenciesAsync } from '../../services/currency.service';

export interface CurrencyState {
  _id: string;
  nameShort: string;
  nameFull: string;
  country: string;
  exchangeRateToOneUSD: number;
  countryFlag: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const initialState: CurrencyState[] | [] = [];

const currencySlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInitialState.fulfilled, (state, action) => {
      if (state) {
        return action.payload;
      }
    });
  },
});

export const getInitialState = createAsyncThunk(
  'currencies/getInitialState',
  getAllCurrenciesAsync
);

export default currencySlice.reducer;
