import { useEffect } from "react";
import { Link } from "react-router";

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../state/store"

import TopTenCurrencies from "../../top-ten-currencies/TopTenCurrencies";

import { TIME_TO_UPDATE_IN_MS } from "../../../constants/constants";
import { setStoreCurrentTime, shouldUpdate } from "../../../helper/date/date.helper";
import { CurrencyState, getInitialState } from "../../../state/currency/currencySlice";

const HomePage = () => {
  const currencies: CurrencyState[] = useSelector((state: RootState) => state.currencies || []);
  const dispatch = useDispatch<AppDispatch>();

  const TOP_TEN_CURRENCIES = ['USD', 'EUR', 'BGN', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK'];

  const topTenCurrencies = currencies.filter((currency: CurrencyState) => {
    if (TOP_TEN_CURRENCIES.includes(currency.nameShort)) {
      return currency;
    };
  });

  useEffect(() => {
    if (shouldUpdate() || !currencies.length) {
      dispatch(getInitialState());
      setStoreCurrentTime();
    }

    const interval = setInterval(() => {
      dispatch(getInitialState());
      setStoreCurrentTime();
    }, TIME_TO_UPDATE_IN_MS);

    return () => clearInterval(interval);
  }, [dispatch, currencies.length]);

  return (
    <div className="flex flex-col gap-4 text-center">
      <h1 className="text-4xl">Currency Converter</h1>
      <p className="text-2xl text-warning">NON COMMERCIAL PROJECT - USED FOR EDUCATIONAL PURPOSES ONLY</p>
      <p className="text-2xl">API used:  <Link to={'https://freecurrencyapi.com/'} target="_blank" rel="noopener noreferrer">https://freecurrencyapi.com/</Link></p>
      <TopTenCurrencies currencies={topTenCurrencies} />
    </div >
  )
}

export default HomePage