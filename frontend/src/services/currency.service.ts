import { CurrencyState } from '../state/currency/currencySlice';

const BASE_URL =
  import.meta.env.VITE_BASE_URL || 'http://localhost:5000/api/currency';

export const getAllCurrenciesAsync = async () => {
  const response = await fetch(BASE_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': `${BASE_URL}`,
    },
  });
  const responseToJSON = await response.json();
  const convertToArray = responseToJSON.currencies.map(
    (currency: CurrencyState) => {
      return currency;
    }
  );
  return convertToArray;
};
