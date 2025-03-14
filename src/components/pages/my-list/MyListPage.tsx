import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

import DisplayCurrencies from "../../display-currencies/DisplayCurrencies";
import { getMyList } from "../../../helper/local-storage/localStorage.helper";

const MyListPage = () => {
  const currencies = useSelector((state: RootState) => state.currencies || {});

  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="flex flex-col text-3xl p-3">My List</h1>
      <DisplayCurrencies currencies={getMyList(currencies)} />
    </div>
  );
};

export default MyListPage;