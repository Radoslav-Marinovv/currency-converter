import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./components/layout/Layout"
import HomePage from "./components/pages/home/HomePage"
import ErrorNotFoundPage from "./components/pages/error/ErrorNotFoundPage"
import MyListPage from "./components/pages/my-list/MyListPage"

function App() {

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
