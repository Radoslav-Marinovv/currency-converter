import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";

import { addRemoveToMyList, isCurrencyInMyList } from "../../helper/local-storage/localStorage.helper";

const CarouselCurrencies = () => {
  const currencies = useSelector((state: RootState) => state.currencies || {});
  const dispatch = useDispatch<AppDispatch>();

  function handleAddToMyList(e: React.MouseEvent<HTMLButtonElement>, currencyId: string) {
    e.preventDefault();
    addRemoveToMyList(currencyId);
    dispatch({ type: 'myList/addToMyList', payload: { id: currencyId } });
  }

  function moveCarousel(direction: string) {
    const carousel = document.querySelector('.carousel') as HTMLElement;
    if (direction === 'left') {
      carousel.scrollLeft -= 300;
    } else if (direction === 'right') {
      carousel.scrollLeft += 300;
    }
  }

  return (
    <div className="flex w-full h-full min-w-sm gap-2 p-2">
      <button onClick={() => { moveCarousel('left') }} className="btn btn-circle btn-outline btn-primary z-10 ">{"<"}</button>
      <div className="carousel w-full rounded-box h-full snap-x gap-2">
        {currencies.map(currency =>
          !isCurrencyInMyList(currency) && <div
            key={currency._id}
            className="carousel-item lg:w-1/4 h-1/4 items-center justify-center bg-base-200 rounded-2xl shadow-accent-content shadow-2xl gap-2 p-2">
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
      <button onClick={() => { moveCarousel('right') }} className="btn btn-circle btn-outline btn-primary z-10">{">"}</button>
    </div>
  )
}
export default CarouselCurrencies;