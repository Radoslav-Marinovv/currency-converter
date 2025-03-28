import { BASE_CURRENCY, BASE_CURRENCY_TEXT } from "../../constants/constants";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { ExchangeState } from "../../state/exchange/exchangeSlice";
import { CurrencyState } from "../../state/currency/currencySlice";

import Loading from "../loading/Loading";
import NoCurrencies from "../no-currencies/NoCurrencies";

type TopTenCurrenciesProps = {
  currencies: CurrencyState[] | null;
};

const DisplayCurrencies = ({ currencies }: TopTenCurrenciesProps) => {

  const exchangeRates: ExchangeState = useSelector((state: RootState) => state.exchange || {});
  const dispatch = useDispatch<AppDispatch>();

  function handleValueChange(e: React.ChangeEvent<HTMLInputElement>, id: string) {
    e.preventDefault();
    dispatch({ type: 'exchange/setExchangeRate', payload: { id, value: e.target.value } });
  }

  return (
    <section className="rounded-2xl shadow-accent-content shadow-2xl min-h-96">
      <p className="text-xl text-center">{BASE_CURRENCY_TEXT}{BASE_CURRENCY}</p>
      <ul className="flex flex-col gap-3 align-middle justify-evenly p-2">
        {
          Array.isArray(currencies) && currencies.length > 0 ? currencies.map((currency: CurrencyState) => {
            return (
              <li
                key={currency._id}
                className="grid grid-cols-1 gap-4 md:grid-cols-3 odd:bg-base-200 even:bg-base-100 p-2 m-2 rounded-2xl shadow-accent-content shadow-2xl">
                <div className="flex flex-row items-center px-2 gap-2">
                  <img src={currency.countryFlag} alt={currency.nameFull} className="w-8 h-8" />
                  <span className="text-xl">{currency.nameShort} - {currency.nameFull}:</span>
                  <span className="text-2xl text-accent">{+(currency.exchangeRateToOneUSD.toFixed(4))}</span>
                </div>
                <div className="flex flex-col items-center gap-3 p-2">
                  <label className="text-lg">
                    {BASE_CURRENCY} to {currency.nameShort}
                  </label>
                  <input
                    type="number"
                    min={0}
                    step={0.01}
                    placeholder={BASE_CURRENCY}
                    value={exchangeRates[currency._id] || ''}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleValueChange(e, currency._id)}
                    className="w-1/3  text-center border rounded-2xl p-4" />
                </div>
                <div className="flex flex-col text-center justify-center text-xl">
                  {exchangeRates[currency._id] ? `${(exchangeRates[currency._id] / +(currency.exchangeRateToOneUSD.toFixed(4))).toFixed(2)} ${currency.nameShort}` : `0 ${currency.nameShort}`}
                </div>
              </li>
            )
          }) : Array.isArray(currencies) ? <Loading /> : <NoCurrencies />
        }
      </ul>
    </section>
  );
};

export default DisplayCurrencies;