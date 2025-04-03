import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

import DisplayCurrencies from "../../display-currencies/DisplayCurrencies";
import CarouselCurrencies from "../../carousel-currencies/CarouselCurrencies";

const MyListPage = () => {
  const currencies = useSelector((state: RootState) => state.currencies || {});
  const myList = useSelector((state: RootState) => state.myList || []);

  const myListCurrencies = currencies.filter((currency) => {
    if (myList?.includes(currency._id)) {
      return currency;
    }
  });

  return (
    <div className="flex flex-col gap-4">
      <CarouselCurrencies />
      {myListCurrencies.length > 0 ?
        <DisplayCurrencies currencies={myListCurrencies} removeFromMyList /> :
        <DisplayCurrencies currencies={null} removeFromMyList />}
    </div>
  );
};

export default MyListPage;