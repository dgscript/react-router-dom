import Header from "./Header.jsx";
import Contact from "./Contact.jsx";
import AboutUs from "./AboutUs.jsx";
import Home from "./Home.jsx";
import Blog from "./Blog.jsx";
import NotFoundPage from "./NotFoundPage.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "contact", element: <Contact /> },
      { path: "blog", element: <Blog /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
