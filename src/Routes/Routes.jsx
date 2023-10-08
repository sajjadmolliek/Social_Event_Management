import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayoute/MainLayout";
import Logins from "../Layout/Logins/Logins";
import Resister from "../Layout/Resister/Resister";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Layout/Home/Home";
import Photography from "../Layout/Home/Photography/Photography";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../Components/Blog/Blog";
import ContactUs from "../Components/ContactUs/ContactUs";
import Sliders from "../Layout/Home/Sliders";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./photodata.json"),
      },
      {
        path: "/:id",
        element: (
          <PrivateRoutes>
            <Photography></Photography>
          </PrivateRoutes>
        ),
        loader: () => fetch("./photodata.json"),
        
      },
      {
        path: "/blog",
        element: (
          <PrivateRoutes>
            <Blog></Blog>
          </PrivateRoutes>
        ),
        loader: () => fetch("./photodata.json"),
      },
      {
        path: "/category",
        element: (
          <PrivateRoutes>
            <Sliders></Sliders>
          </PrivateRoutes>
        ),
      },
      {
        path: "/contact",
        element: (
            <ContactUs></ContactUs>
        ),
      },
      {
        path: "/logins",
        element: <Logins></Logins>,
      },
      {
        path: "/resister",
        element: <Resister></Resister>,
      },
    ],
  },
]);

export default Routes;
