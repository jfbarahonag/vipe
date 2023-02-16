import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}   

export default Layout;