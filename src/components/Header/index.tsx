import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Products",
      link: "/products",
    },
  ],
  right: [
    {
      id: 4,
      name: "Service",
      link: "/service",
    },
    {
      id: 5,
      name: "Gallery",
      link: "/gallery",
    },
    {
      id: 6,
      name: "Contact",
      link: "/contact",
    },

  ]
}

const equals = (obj1: Object, obj2: Object) => (
  JSON.stringify(obj1) === JSON.stringify(obj2)
)

const Header = () => {
  const [active, setActive] = useState(navBarLinks.left[0]);
  return (
    <header className='' style={{ position: 'sticky', zIndex: 10, top: 0 }} >
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
            <Link
              to={'/'}
              className="navbar-brand d-block d-lg-none"
            >
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
                    <li key={item.id}>
                      <Link
                        to={item.link}
                        className={`nav-item nav-link ${equals(item, active) ? 'active' : ''}`}
                        onClick={_e => { setActive(item as any) }}
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
                    <li key={item.id}>
                      <Link
                        to={item.link}
                        className={`nav-item nav-link ${equals(item, active) ? 'active' : ''}`}
                        onClick={_e => { setActive(item as any) }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                }
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