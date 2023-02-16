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
      fa:'fab fa-facebook-f'
    },
    {
      title: "twiter",
      path: "/",
      fa:'fab fa-twitter'
    },
    {
      title: "instagram",
      path: "https://www.instagram.com",
      fa:'fab fa-instagram'
    },

  ],
}

const Header = () => {
  return (
    <Wrapper>
      <header>
        {/* // topbar */}
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
        {/* // hero slider */}
      </header>
    </Wrapper>
  )
}

export default Header;