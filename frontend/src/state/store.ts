import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './currency/currencySlice';
import exchangeReducer from './exchange/exchangeSlice';

export const store = configureStore({
  reducer: {
    currencies: currencyReducer,
    exchange: exchangeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
