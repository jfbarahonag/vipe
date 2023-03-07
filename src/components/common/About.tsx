import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <h1 className="section-title position-relative text-center mb-5">
              Traditional & Delicious Ice Cream Since 1950
            </h1>
          </div>
        </div>
        <div className="row">
          {/* left */}
          <div className="col-lg-4 py-5">
            <h4 className="font-weight-bold mb-3">
              About Us
            </h4>
            <h5 className="text-muted mb-3">
              Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea
            </h5>
            <p>
              Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod
            </p>
            <Link 
              to={'/'}
              className="btn btn-secondary mt-2"
            >
              Learn More
            </Link>
          </div>
          {/* center */}
          <div className="col-lg-4" style={{minHeight: '400px'}}>
            <div className="position-relative h-100 rounded overflow-hidden">
              <img src="/img/about.jpg" alt="about" className="position-absolute w-100 h-100" style={{objectFit: 'cover'}} />
            </div>
          </div>
          {/* right */}
          <div className="col-lg-4 py-5">
            <h4 className="font-weight-bold mb-3">Our features</h4>
            <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
            <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>Eos kasd eos dolor</h5>
            <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>Eos kasd eos dolor</h5>
            <h5 className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>Eos kasd eos dolor</h5>
            <Link 
              to={'/'}
              className="btn btn-primary mt-2"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About