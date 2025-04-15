import { useSelector } from "react-redux";
import { CurrencyState } from "../../state/currency/currencySlice";
import { RootState } from "../../state/store";

const CarouselInfo = () => {
  const currencies: CurrencyState[] = useSelector((state: RootState) => state.currencies || []);

  return (
    <div className="carousel w-full h-full rounded-3xl min-w-sm gap-2 p-2">
      {currencies.map((currency: CurrencyState) => (
        <div
          key={currency._id}
          className="carousel-item carousel-animation flex-col lg:w-[15%] h-1/4 items-center p-2 bg-base-200 rounded-2xl shadow-accent-content shadow-2xl transform transition-transform -translate-x-full"
        >
          <img
            draggable
            src={currency.countryFlag}
            alt={currency.nameFull}
            className="w-8 h-8"
          />
          <p draggable>{currency.nameShort}</p>
          <p draggable className="text-accent">{currency.exchangeRateToOneUSD.toFixed(4)}</p>
        </div>
      ))}
    </div>
  );
}

export default CarouselInfo;