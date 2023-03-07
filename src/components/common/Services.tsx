import { Link } from "react-router-dom"
import ReactOwlCarousel from "react-owl-carousel"
import servicesData from "../../../json/services"

const options = {
  autoplay: false,
  smartSpeed: 1500,
  margin: 30,
  dots: false,
  loop: true,
  nav : true,
  navText : [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  responsive: {
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:3
      }
  }
}

const Services = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        {/* title */}
        <div className="row">
          {/* text */}
          <div className="col-lg-6">
            <h1 className="section-title position-relative mb-5">
              {servicesData.title}
            </h1>
          </div>
          {/* whitespace */}
          <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
        </div>
        {/* cards */}
        <div className="row">
          <div className="col-12">
            <ReactOwlCarousel
              className="owl-carousel service-carousel"
              {...options}
            >
              {
                servicesData.cards.map(card =>
                  <div key={card.id} className="service-item">
                    <div className="service-img mx-auto">
                      <img 
                        src={card.img.path} 
                        alt={card.img.text} 
                        className="rounded-circle w-100 h-100 bg-light p-3"
                        style={{objectFit: 'cover'}}
                      />
                    </div>
                    <div 
                      className="position-relative text-center bg-light rounded p-4 pb-5"
                      style={{marginTop: '-75px'}}
                    >
                      <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">
                        {card.title}
                      </h5>
                      <p>{card.description}</p>
                      <Link to={card.more.link}
                        className="border-bottom border-secondary text-decoration-none text-secondary"
                      >
                        {card.more.text}
                      </Link>
                    </div>
                  </div> 
                )
              }
            </ReactOwlCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services