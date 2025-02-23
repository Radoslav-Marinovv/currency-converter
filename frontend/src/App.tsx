import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./components/layout/Layout"
import HomePage from "./components/pages/home/HomePage"
import ErrorNotFoundPage from "./components/pages/error/ErrorNotFoundPage"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
      ],
      errorElement: <ErrorNotFoundPage />
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
