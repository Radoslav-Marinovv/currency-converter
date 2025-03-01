import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

import DisplayCurrencies from "../../DisplayCurrencies/DisplayCurrencies";

const MyListPage = () => {
  const currencies = useSelector((state: RootState) => state.currencies || {});

  return (
    <div className="flex flex-col gap-4 text-center">
      <h1 className="flex flex-col text-3xl p-3">My List</h1>
      <DisplayCurrencies currencies={currencies} />
    </div>
  );
};

export default MyListPage;