import { Link } from 'react-router-dom';

import { links } from "../../../json/routes"

const NavBar = () => {
  return (
    <nav>
      <ul>
        {
          links.map(item => 
            <li key={item.id}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default NavBar;