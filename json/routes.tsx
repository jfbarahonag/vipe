import Layout from "../src/pages/Layout";
import Home from "../src/pages/Home";
import Blogs from "../src/pages/Blogs";
import Contact from "../src/pages/Contact";
import About from "../src/pages/About";

//App
export const elementsRoutes = [
  {
    parent: {
      id: 1,
      path: "/",
      element: <Layout />
    },
    children: [
      {
        id: 10,
        path: "",
        element: <Home />
      },
      {
        id: 11,
        path: "blogs",
        element: <Blogs />
      },
      {
        id: 12,
        path: "contact",
        element: <Contact />
      },
      {
        id: 13,
        path: "about",
        element: <About />
      },
    ]
  }
]

//NavBar
export const links = [
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