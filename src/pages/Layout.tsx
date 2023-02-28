import { Outlet } from "react-router-dom";
import Wrapper from "../components/common/Wrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  )
}   

export default Layout;