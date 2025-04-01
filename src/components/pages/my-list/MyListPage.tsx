import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

import DisplayCurrencies from "../../display-currencies/DisplayCurrencies";
import CarouselCurrencies from "../../carousel-currencies/CarouselCurrencies";

import { getMyList } from "../../../helper/local-storage/localStorage.helper";
import { useEffect } from "react";

const MyListPage = () => {
  const currencies = useSelector((state: RootState) => state.currencies || {});
  const myList = localStorage.getItem('myList') || '';


  useEffect(() => {

  }, [myList]);

  return (
    <div className="flex flex-col gap-4" >
      <h1 className="flex flex-col text-3xl p-3">My List</h1>
      <CarouselCurrencies />
      <DisplayCurrencies currencies={getMyList(currencies)} removeFromMyList />
    </div>
  );
};

export default MyListPage;