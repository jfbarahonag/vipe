import { Link } from "react-router-dom"
import aboutData from '../../../json/about'

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
              {aboutData.about.title}
            </h4>
            <h5 className="text-muted mb-3">
              {aboutData.about.subtitle}
            </h5>
            <p>
              {aboutData.about.paragraph}
            </p>
            <Link 
              to={aboutData.about.more.link}
              className="btn btn-secondary mt-2"
            >
              {aboutData.about.more.text}
            </Link>
          </div>
          {/* center */}
          <div className="col-lg-4" style={{minHeight: '400px'}}>
            <div className="position-relative h-100 rounded overflow-hidden">
              <img src={aboutData.img.path} alt={aboutData.img.text} className="position-absolute w-100 h-100" style={{objectFit: 'cover'}} />
            </div>
          </div>
          {/* right */}
          <div className="col-lg-4 py-5">
            <h4 className="font-weight-bold mb-3">{aboutData.features.title}</h4>
            <p>{aboutData.features.paragraph}</p>
            {
              aboutData.features.items.map(item =>
                <h5 key={item.id} className="text-muted mb-3"><i className="fa fa-check text-secondary mr-3"></i>{item.text}</h5>

              )
            }
            <Link 
              to={aboutData.features.more.link}
              className="btn btn-primary mt-2"
            >
              {aboutData.features.more.text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About