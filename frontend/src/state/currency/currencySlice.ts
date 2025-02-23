import { createSlice } from '@reduxjs/toolkit';

interface CurrencyState {
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

const initialState: CurrencyState | null = null;

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
});

export default currencySlice.reducer;
