import { Link } from "react-router";

import { useSelector } from "react-redux"
import { RootState } from "../../../state/store"
import { CurrencyState } from "../../../state/currency/currencySlice";

import DisplayCurrencies from "../../display-currencies/DisplayCurrencies";

const HomePage = () => {
  const currencies: CurrencyState[] = useSelector((state: RootState) => state.currencies || []);

  const TOP_TEN_CURRENCIES = ['USD', 'EUR', 'BGN', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK'];

  const topTenCurrencies = currencies.filter((currency: CurrencyState) => {
    if (TOP_TEN_CURRENCIES.includes(currency.nameShort)) {
      return currency;
    };
  });

  return (
    <div className="flex flex-col gap-4 pb-10">
      <h1 className="text-2xl text-warning text-center">NON COMMERCIAL PROJECT - USED FOR EDUCATIONAL PURPOSES ONLY</h1>
      <h2 className="text-4xl text-center">Currency Converter</h2>
      <p className="text-2xl text-center">API used:  <Link to={'https://freecurrencyapi.com/'} target="_blank" rel="noopener noreferrer">https://freecurrencyapi.com/</Link></p>
      <DisplayCurrencies currencies={topTenCurrencies} />
    </div >
  )
}

export default HomePage