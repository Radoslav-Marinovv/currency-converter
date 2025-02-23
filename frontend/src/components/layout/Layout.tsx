import { Outlet } from "react-router"
import Navbar from "./navbar/Navbar"

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
    </>
  )
}

export default Layout