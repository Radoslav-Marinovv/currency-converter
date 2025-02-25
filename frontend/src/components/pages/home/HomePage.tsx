import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../state/store"
import { useEffect } from "react";
import { CurrencyState, getInitialState } from "../../../state/currency/currencySlice";
import { setStoreCurrentTime, shouldUpdate } from "../../../helper/date/date.helper";
import { TIME_TO_UPDATE_IN_MS } from "../../../constants/constants";

const HomePage = () => {

  const currencies: CurrencyState[] = useSelector((state: RootState) => state.currencies || []);
  const dispatch = useDispatch<AppDispatch>();

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
      <p className="text-2xl">Welcome to the Currency Converter App</p>
      <section className="bordered shadow-accent-content shadow-2xl h-96">
        <h2 className="flex flex-col text-3xl p-3">Top 10 currencies</h2>
        <ul className="flex flex-row align-middle justify-evenly p-2">
          {
            currencies.length > 0 ? currencies.map((currency: CurrencyState) => {
              return (
                <li key={currency._id} className="flex flex-row gap-2 items-center">
                  {currency.nameShort} - {currency.country}, {currency.exchangeRateToOneUSD} <img src={currency.countryFlag} alt={currency.country} className="w-8 h-8" />
                </li>
              );
            }) : <li>Loading...</li>
          }
        </ul>
      </section>
    </div>
  )
}

export default HomePage