import { Link } from 'react-router-dom';
import Wrapper from '../common/Wrapper';

/**
 * Header.jsx
 * -------------------------------------------------------------------------------------------------
 * -------------------------------------------------------------------------------------------------
 */

const topBarLinks = {
  left: [
    {
      title: "FAQs",
      path: "/faq",
    },
    {
      title: "Help",
      path: "/help",
    },
    {
      title: "Support",
      path: "/support",
    },
  ],
  right: [
    {
      title: "facebook",
      path: "/",
      fa: 'fab fa-facebook-f'
    },
    {
      title: "twiter",
      path: "/",
      fa: 'fab fa-twitter'
    },
    {
      title: "instagram",
      path: "https://www.instagram.com",
      fa: 'fab fa-instagram'
    },

  ],
}

const navBarLinks = {
  left: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Products",
      link: "/products",
    },
  ],
  right: [
    {
      name: "Service",
      link: "/service",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Contact",
      link: "/contact",
    },

  ]
}

const Header = () => {
  return (
      <header className='' style={{position:'sticky', zIndex:10, top:0}} >
        {/* topbar */}
        <div className='container-fluid bg-primary py-3 d-none d-md-block'>
          <div className="container">
            <div className="row">
              {/* left navbar */}
              <nav className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                <ul className="d-inline-flex align-items-center" style={{ listStyle: 'none' }}>
                  {
                    topBarLinks.left.map(item =>
                      <li
                        key={item.title}
                      >
                        <Link
                          target={'_self'}
                          className='text-white pr-3'
                          to={item.path}
                        >
                          {item.title}
                        </Link>
                      </li>
                    )
                  }
                </ul>
              </nav>
              {/* right navbar */}
              <nav className="col-md-6 text-center text-lg-right">
                <ul className="d-inline-flex align-items-center" style={{ listStyle: 'none' }}>
                  {
                    topBarLinks.right.map(item =>
                      <li
                        key={item.title}
                      >
                        <Link
                          target={'_blank'}
                          className='text-white pr-3'
                          to={item.path}
                        >
                          <i className={item.fa}></i>
                        </Link>
                      </li>
                    )
                  }
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* // navbar */}
        <div className="container-fluid position-relative nav-bar p-0">
          <div className="container-lg position-relative p-0 px-lg-0" style={{ zIndex: 1 }}>
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
              {/* central text */}
              <Link to={'/'} className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-4 text-primary"><span className="text-secondary">Vipe</span>GB</h1>
              </Link>
              {/* hamburguer button */}
              <button
                type='button'
                className='navbar-toggler'
                data-toggle='collapse'
                data-target='#navbarCollapse'
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* nav bar */}
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                {/* left options */}
                <ul className="navbar-nav ml-auto py-0">
                  {
                    navBarLinks.left.map((item, idx) =>
                      <li key={item.name}>
                        <Link
                          to={item.link}
                          className={`nav-item nav-link ${idx === 0 ? 'active' : ''}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    )
                  }
                </ul>
                {/* center option */}
                <Link to={'/'} className="navbar-brand mx-5 d-none d-lg-block">
                  <h1 className="m-0 display-4 text-primary"><span className="text-secondary">Vipe</span>GB</h1>
                </Link>
                {/* right options */}
                <ul className="navbar-nav mr-auto py-0">
                  {
                    navBarLinks.right.map(item =>
                      <li key={item.name}>
                        <Link
                          to={item.link}
                          className='nav-item nav-link'
                        >
                          {item.name}
                        </Link>
                      </li>
                    )
                  }
                  {/* <a href="service.html" className="nav-item nav-link">Service</a>
                        <a href="gallery.html" className="nav-item nav-link">Gallery</a>
                        <a href="contact.html" className="nav-item nav-link">Contact</a> */}
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* // hero slider */}
      </header>
  )
}

export default Header;