import { Link } from "react-router-dom"
import ReactOwlCarousel from "react-owl-carousel"

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
              Best Services We Provide For Our Clients
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
              <div className="service-item">
                <div className="service-img mx-auto">
                  <img
                    style={{objectFit: 'cover'}} 
                    src="/img/service-1.jpg" 
                    alt="service 1" 
                    className="rounded-circle w-100 h-100 bg-light p-3"
                  />
                </div>
                <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{marginTop:'-75px'}}>
                  <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">
                    Quality Mantain
                  </h5>
                  <p>
                    Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo
                  </p>
                  <Link to={'/'}>Learn More</Link>
                </div>
              </div>
              <div className="service-item">
                <div className="service-img mx-auto">
                  <img
                    style={{objectFit: 'cover'}} 
                    src="/img/service-2.jpg" 
                    alt="service 2" 
                    className="rounded-circle w-100 h-100 bg-light p-3"
                  />
                </div>
                <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{marginTop:'-75px'}}>
                  <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">
                    Quality Mantain
                  </h5>
                  <p>
                    Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo
                  </p>
                  <Link to={'/'}>Learn More</Link>
                </div>
              </div>
              <div className="service-item">
                <div className="service-img mx-auto">
                  <img
                    style={{objectFit: 'cover'}} 
                    src="/img/service-3.jpg" 
                    alt="service 3" 
                    className="rounded-circle w-100 h-100 bg-light p-3"
                  />
                </div>
                <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{marginTop:'-75px'}}>
                  <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">
                    Quality Mantain
                  </h5>
                  <p>
                    Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo
                  </p>
                  <Link to={'/'}>Learn More</Link>
                </div>
              </div>
              <div className="service-item">
                <div className="service-img mx-auto">
                  <img
                    style={{objectFit: 'cover'}} 
                    src="/img/service-4.jpg" 
                    alt="service 4" 
                    className="rounded-circle w-100 h-100 bg-light p-3"
                  />
                </div>
                <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{marginTop:'-75px'}}>
                  <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">
                    Quality Mantain
                  </h5>
                  <p>
                    Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo
                  </p>
                  <Link to={'/'}>Learn More</Link>
                </div>
              </div>
            </ReactOwlCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services