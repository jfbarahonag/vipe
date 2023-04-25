import Carousel from "../components/common/Carousel";
import About from "../components/common/About";
import Services from "../components/common/Services";
import Portfolio from "../components/common/Portfolio";
import Products from "../components/common/Products";

export const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Services />
      <Portfolio />
      <Products />
    </>
  )
}

export default Home;