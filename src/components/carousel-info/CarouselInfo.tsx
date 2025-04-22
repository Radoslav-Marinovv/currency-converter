import { useSelector } from "react-redux";
import { CurrencyState } from "../../state/currency/currencySlice";
import { RootState } from "../../state/store";

const CarouselInfo = () => {
  const currencies: CurrencyState[] = useSelector((state: RootState) => state.currencies || []);

  return (
    <div className="relative top-3 w-full h-32 rounded-3xl min-w-sm gap-2 p-2 overflow-x-clip">
      {currencies.map((currency: CurrencyState, idx) => (
        <div
          key={currency._id}
          className={`carousel-animation animation-delay-${idx} w-20 h-fill p-2 items-center bg-base-200 rounded-2xl`}
        >
          <img
            draggable
            src={currency.countryFlag}
            alt={currency.nameFull}
            className="w-8 h-8"
          />
          <p>{idx + 1}</p>
          <p draggable>{currency.nameShort}</p>
          <p draggable className="text-accent">{currency.exchangeRateToOneUSD.toFixed(4)}</p>
        </div>
      ))}
    </div>
  );
}

export default CarouselInfo;