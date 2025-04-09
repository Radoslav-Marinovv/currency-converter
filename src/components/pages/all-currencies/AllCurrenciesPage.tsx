import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { CurrencyState } from "../../../state/currency/currencySlice";
import DisplayCurrencies from "../../display-currencies/DisplayCurrencies";

const AllCurrenciesPage = () => {
  const currencies: CurrencyState[] = useSelector((state: RootState) => state.currencies || []);
  return <DisplayCurrencies currencies={currencies} />;
}

export default AllCurrenciesPage;