import { CurrencyState } from '../../state/currency/currencySlice';

export const getMyList = (currencies: CurrencyState[]) => {
  const idList = localStorage.getItem('myList');

  if (!idList) {
    return [];
  }

  return currencies.filter((currency: CurrencyState) => {
    if (idList?.includes(currency._id)) {
      return currency;
    }
  });
};

export const isCurrencyInMyList = (currency: CurrencyState) => {
  const idList = localStorage.getItem('myList') || '';

  return idList.includes(currency._id);
};

export const addRemoveToMyList = (currencyId: string) => {
  const idList = localStorage.getItem('myList') || '';
  const newIdList = idList.length > 0 ? idList.split(',') : [];

  if (newIdList.includes(currencyId)) {
    newIdList.splice(newIdList.indexOf(currencyId), 1);
  } else {
    newIdList.push(currencyId);
  }

  localStorage.setItem('myList', newIdList.toString());
};
