import { CurrencyState } from '../../state/currency/currencySlice';

export const getMyList = (currencies: CurrencyState[]) => {
  const idList = localStorage.getItem('myList');

  if (!idList) {
    return null;
  }

  return currencies.filter((currency: CurrencyState) => {
    if (idList?.includes(currency._id)) {
      return currency;
    }
  });
};
