import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

import NotFound from "./pages/404";
import About from "./pages/About";

const routes = [
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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          routes.map(({ parent, children }) =>
            <Route key={parent.id} path={parent.path} element={parent.element}>
              {
                children.map((child, idx) => 
                  <Route 
                    index={idx === 0 ? true : false} 
                    key={child.id}
                    path={child.path} 
                    element={child.element} />
                )
              }
              <Route path="*" element={<NotFound />} />
            </Route>
          )
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App