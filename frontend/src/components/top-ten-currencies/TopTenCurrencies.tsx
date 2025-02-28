import { CurrencyState } from "../../state/currency/currencySlice";
import Loading from "../loading/Loading";

type TopTenCurrenciesProps = {
  currencies: CurrencyState[];
};

const TopTenCurrencies = ({ currencies }: TopTenCurrenciesProps) => {
  return (
    <section className="rounded-2xl shadow-accent-content shadow-2xl">
      <h2 className="flex flex-col text-3xl p-3">Top 10 currencies</h2>
      <p className="text-xl">Base: USD</p>
      <ul className="flex flex-col gap-3 align-middle justify-evenly p-2">
        {
          currencies.length > 0 ? currencies.map((currency: CurrencyState) => {
            return (
              <li key={currency._id} className="flex flex-row items-center justify-between odd:bg-base-200 even:bg-base-100 p-2 m-2 rounded-2xl shadow-accent-content shadow-2xl">
                <div className="flex flex-row items-center gap-2">
                  <img src={currency.countryFlag} alt={currency.nameFull} className="w-8 h-8" />
                  <span className="text-xl">{currency.nameShort} - {currency.nameFull}:</span><span className="text-2xl text-accent">{currency.exchangeRateToOneUSD}</span>
                </div>
              </li>
            )
          }) : <Loading />
        }
      </ul>
    </section>
  );
};

export default TopTenCurrencies;