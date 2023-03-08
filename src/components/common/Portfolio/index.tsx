import portfolioData from "../../../../json/portfolio";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div className="container-fluid py-5">
      {/* title */}
      <div className="row justify-content-center m-0">
        <div className="col-lg-5">
          <h1 className="section-title position-relative text-center mb-5">
            Delicious Ice Cream Made From Our Very Own Organic Milk
          </h1>
        </div>
      </div>
      {/* content */}
      <div className="row m-0 portfolio-container">
        {
          portfolioData.map(({id, ...item}) =>
            <PortfolioItem
              key={id}
              data={item} 
            />
          )
        }
      </div>
    </div>
  )
}

export default Portfolio;