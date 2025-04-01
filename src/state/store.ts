import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './currency/currencySlice';
import exchangeReducer from './exchange/exchangeSlice';
import { myListReducer } from './myList/myListSlice';

export const store = configureStore({
  reducer: {
    currencies: currencyReducer,
    exchange: exchangeReducer,
    myList: myListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
