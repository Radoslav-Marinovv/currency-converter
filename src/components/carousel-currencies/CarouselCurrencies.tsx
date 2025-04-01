import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";

import { addRemoveToMyList, filterMyList } from "../../helper/local-storage/localStorage.helper";

const CarouselCurrencies = () => {
  const currencies = useSelector((state: RootState) => state.currencies || {});
  const myList = useSelector((state: RootState) => state.myList || []);
  const dispatch = useDispatch<AppDispatch>();

  function handleAddToMyList(e: React.MouseEvent<HTMLButtonElement>, currencyId: string) {
    e.preventDefault();
    addRemoveToMyList(currencyId);
    dispatch({ type: 'myList/addToMyList', payload: { id: currencyId } });
  }

  return (
    <div className="carousel carousel-start rounded-box gap-10 p-2">
      {currencies.map(currency =>
        !filterMyList(currency) && <div
          key={currency._id}
          className="carousel-item w-1/4 h-1/4 items-center justify-center bg-base-200 rounded-2xl shadow-accent-content shadow-2xl gap-2 p-2">
          <img
            src={currency.countryFlag}
            alt={currency.nameFull}
            className="w-8 h-8" />
          <p>{currency.nameShort}</p>
          <button
            className="btn btn-info btn-outline btn-sm"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleAddToMyList(e, currency._id)}
          >Add to favorites</button>
        </div>
      )}
    </div>
  )
}
export default CarouselCurrencies;