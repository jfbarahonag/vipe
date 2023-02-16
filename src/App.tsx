import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "./pages/404";

import { elementsRoutes as routes } from "../json/routes";

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