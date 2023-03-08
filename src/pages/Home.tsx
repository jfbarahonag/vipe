import Carousel from "../components/common/Carousel";
import About from "../components/common/About";
import Services from "../components/common/Services";
import Portfolio from "../components/common/Portfolio";

export const Home = () => {
  return (
    <>
      <Carousel />
      <About />
      <Services />
      <Portfolio />
    </>
  )
}

export default Home;