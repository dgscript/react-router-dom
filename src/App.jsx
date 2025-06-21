import "./App.css";
import Header from "./Header.jsx";
import Contact from "./Contact.jsx";
import AboutUs from "./AboutUs.jsx";
import Home from "./Home.jsx";
import Blog from "./Blog.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/blog", element: <Blog /> },
  { path: "/aboutus", element: <AboutUs /> },
  /* the * defines pages that are not defined on the router */
  { path: "*", element: <NotFoundPage /> },
]);

function App() {
  return (
    <>
      <Header />
      <hr />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
