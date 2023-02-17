import { Outlet } from "react-router-dom";
import Wrapper from "../components/common/Wrapper";
import Header from "../components/Header";

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  )
}   

export default Layout;