import { Link } from "react-router-dom";
import { social } from "../../../json/routes";

const Footer = () => {
  return (
    <footer
      className="container-fluid footer bg-light py-5"
      style={{ marginTop: '90px' }}
    >
      <div className="container text-center py-5">
        <div className="row">
          <div className="col-12 mb-4">
            <Link to={'/'} className="navbar-brand m-0">
              <h1 className="m-0 mt-n2 display-4 text-primary"><span className="text-secondary">Vipe</span>GB</h1>
            </Link>
          </div>
          <div className="col-12 mb-4">
            {
              social.map((s, idx) => 
                <Link  
                  key={s.id} 
                  to={s.link}
                  className={`btn btn-outline-secondary btn-social ${idx !== social.length - 1 ? 'mr-2':''}`}
                >
                  <i className={s.className}></i>
                </Link>
              )
            }
          </div>
          <div className="col-12 mt-2 mb-4">
            <div className="row">
              <div className="col-sm-6 text-center text-sm-right border-right mb-3 mb-sm-0">
                <h5 className="font-weight-bold mb-2">Get In Touch</h5>
                <p className="mb-2"> 123 street, New York, USA</p>
                <p className="mb-0">+57 333 111 2222</p>
              </div>
              <div className="col-sm-6 text-center text-sm-left">
                <h5 className="font-weight-bold mb-2">Opening hours</h5>
                <p className="mb-2">Mon – Sat, 8AM – 5PM</p>
                <p className="mb-0">Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p className="m-0">
              &copy; <Link to={'#'}>VipeGB</Link>. 
              Todos los derechos reservados. <br /> 
              Desarrollado por <Link target={'_blank'} to={"https://github.com/jfbarahonag"}>@jfbarahonag</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;