
interface Image {
  path: string,
  text: string,
}

interface PortfolioData {
  img: Image,
}

type PortFolioItem = {
  data: PortfolioData
}

const PortfolioItem = ({ data }:PortFolioItem) => {
  return (
    <div className="col-lg-4 col-md-6 p-0 portfolio-item">
      <div className="position-relative overflow-hidden">
        <img src={data.img.path} alt={data.img.text} className="img-fluid w-100" />
        <a href={data.img.path} className="portfolio-btn" data-lightbox="portfolio">
          <i className="fa fa-plus text-primary" style={{fontSize: '60px'}}></i>
        </a>
      </div>
    </div>
  )
}
export default PortfolioItem;
