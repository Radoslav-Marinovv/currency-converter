import { CurrencyState } from '../state/currency/currencySlice';

type CurrencyType = {
  currencies: CurrencyState[];
};

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

const fetchCurrencyData = async () =>
  fetch(`${BASE_URL}/api/currency`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': `${BASE_URL}`,
    },
  });

export const getAllCurrenciesAsync = async () => {
  try {
    const response = await fetchCurrencyData();
    const responseToJSON = (await response.json()) as CurrencyType;
    return responseToJSON.currencies;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching data: ', error.message);
    } else {
      console.error('Error fetching data: ', error);
    }
    return [];
  }
};
