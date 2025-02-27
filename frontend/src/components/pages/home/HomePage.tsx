import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../state/store"
import { useEffect } from "react";
import { CurrencyState, getInitialState } from "../../../state/currency/currencySlice";
import { setStoreCurrentTime, shouldUpdate } from "../../../helper/date/date.helper";
import { TIME_TO_UPDATE_IN_MS } from "../../../constants/constants";
import { Link } from "react-router";

const HomePage = () => {

  const currencies: CurrencyState[] = useSelector((state: RootState) => state.currencies || []);
  const dispatch = useDispatch<AppDispatch>();

  const TOP_TEN_CURRENCIES = ['USD', 'EUR', 'BGN', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK'];

  const top10Currencies = currencies.filter((currency: CurrencyState) => {
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

      <section className="rounded-2xl shadow-accent-content shadow-2xl">
        <h2 className="flex flex-col text-3xl p-3">Top 10 currencies</h2>
        <ul className="flex flex-col gap-3 align-middle justify-evenly p-2">
          {
            top10Currencies.length > 0 ? top10Currencies.map((currency: CurrencyState) => {
              return (
                <li key={currency._id} className="flex flex-row items-center justify-between odd:bg-base-200 even:bg-base-100 p-2 rounded-2xl shadow-accent-content shadow-2xl">
                  {currency.nameShort} - {currency.nameFull}, {currency.exchangeRateToOneUSD}
                  <img src={currency.countryFlag} alt={currency.nameFull} className="w-8 h-8" />
                </li>
              )
            }) :
              <div className="flex justify-center items-center h-96">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-secondary"></div>
              </div>
          }
        </ul>
      </section>
    </div >
  )
}

export default HomePage