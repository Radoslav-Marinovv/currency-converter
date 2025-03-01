import { Link } from "react-router";

import { useSelector } from "react-redux"
import { RootState } from "../../../state/store"
import { CurrencyState } from "../../../state/currency/currencySlice";

import TopTenCurrencies from "../../top-ten-currencies/TopTenCurrencies";

const HomePage = () => {
  const currencies: CurrencyState[] = useSelector((state: RootState) => state.currencies || []);

  const TOP_TEN_CURRENCIES = ['USD', 'EUR', 'BGN', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK'];

  const topTenCurrencies = currencies.filter((currency: CurrencyState) => {
    if (TOP_TEN_CURRENCIES.includes(currency.nameShort)) {
      return currency;
    };
  });

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