import { CurrencyState } from '../state/currency/currencySlice';

type CurrencyType = {
  currencies: CurrencyState[];
};

const SERVER_API_URL = import.meta.env.VITE_SERVER_API_URL || '';

const fetchCurrencyData = async () =>
  fetch(`${SERVER_API_URL}/api/currency`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': `${SERVER_API_URL}`,
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
