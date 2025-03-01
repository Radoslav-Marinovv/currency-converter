import { useEffect } from "react"
import { createBrowserRouter, RouterProvider } from "react-router"

import { AppDispatch, RootState } from "./state/store"
import { useDispatch, useSelector } from "react-redux"
import { CurrencyState, getInitialState } from "./state/currency/currencySlice"
import { setStoreCurrentTime, shouldUpdate } from "./helper/date/date.helper"

import Layout from "./components/layout/Layout"
import HomePage from "./components/pages/home/HomePage"
import MyListPage from "./components/pages/my-list/MyListPage"
import ErrorNotFoundPage from "./components/pages/error/ErrorNotFoundPage"

import { TIME_TO_UPDATE_IN_MS } from "./constants/constants"

function App() {
  const currencies: CurrencyState[] = useSelector((state: RootState) => state.currencies || []);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (shouldUpdate() || !currencies.length) {
      dispatch(getInitialState());
      setStoreCurrentTime();
    }

    const interval = setInterval(() => {
      dispatch(getInitialState());
      setStoreCurrentTime();
    }, TIME_TO_UPDATE_IN_MS);

    return () => clearInterval(interval);
  }, [currencies.length, dispatch]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/my-list', element: <MyListPage /> },
        { path: '*', element: <ErrorNotFoundPage /> }
      ],
      errorElement: <ErrorNotFoundPage />
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
