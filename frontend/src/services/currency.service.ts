import { CurrencyState } from '../state/currency/currencySlice';

type CurrencyType = {
  currencies: CurrencyState[];
};

const BASE_URL =
  import.meta.env.VITE_BASE_URL || 'http://localhost:5000/api/currency';

export const getAllCurrenciesAsync = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `${BASE_URL}`,
      },
    });
    const responseToJSON = (await response.json()) as CurrencyType;
    const convertToArray = responseToJSON.currencies.map((currency) => {
      return currency;
    });
    return convertToArray;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching data: ', error.message);
    } else {
      console.error('Error fetching data: ', error);
    }

    return [];
  }
};
