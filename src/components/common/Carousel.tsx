import images from "../../../json/images";

const Carousel = () => {
  return (
    <div className="container-fluid p-0 mb-5 pb-5">
      <div id="header-carousel" className="carousel slide" data-ride="caroulse">
        {/* content */}
        <div className="carousel-inner">
          {
            images.map((image, idx) =>
              <div key={image.id} className={`carousel-item ${idx === 0 ? 'active':''}`}>
                {/* image */}
                <img src={image.path} alt={image.alt} className="w-100" />
                {/* caption */}
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{maxWidth:'900px'}}>
                    <h4 className="text-white text-uppercase mb-md-3">{image.caption.title}</h4>
                    <h1 className="display-3 text-white mb-md-4">{image.caption.subtitle}</h1>
                    <a href={image.caption.more.link} className="btn btn-primary py-md-3 px-md-5 mt-2">{image.caption.more.text}</a>
                  </div>
                </div>
              </div>
            )
          }
        </div>
        {/* controls: prev */}
        <a href="#header-carousel" className="carousel-control-prev" data-slide="prev">
          <div className="btn btn-secondary px-0" style={{width:'45px', height:'45px'}}>
            <span className="carousel-control-prev-icon mb-n1"></span>
          </div>
        </a>
        {/* controls: next */}
        <a href="#header-carousel" className="carousel-control-next" data-slide="next">
          <div className="btn btn-secondary px-0" style={{width:'45px', height:'45px'}}>
            <span className="carousel-control-next-icon mb-n1"></span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Carousel;