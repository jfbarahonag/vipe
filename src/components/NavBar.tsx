import { Link } from 'react-router-dom';

const links = [
  {
    id:1,
    name: 'Home',
    path:'/'
  },
  {
    id:2,
    name: 'Blogs',
    path:'/blogs'
  },
  {
    id:3,
    name: 'Contact',
    path:'/contact'
  },
  {
    id:4,
    name: 'About',
    path:'/about'
  },
];

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