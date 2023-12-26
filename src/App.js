import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hotels from "./pages/Hotels"

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/about", element: <About/> },
  { path: "/contact", element: <Contact/> },
  { path: "/hotels", element: <Hotels/>}
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
