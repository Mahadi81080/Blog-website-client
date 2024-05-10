import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddBlog from "../Pages/AddBlog/AddBlog";
import Home from "../Pages/Home/Home";
import AllBlog from "../Pages/AllBlog/AllBlog";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import PrivateRoutes from "./PrivateRoutes";
import Wishlist from "../Pages/Wishlist/Wishlist";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/addBlog`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addBlog",
        element: (
          <PrivateRoutes>
            <AddBlog></AddBlog>
          </PrivateRoutes>
        ),
      },
      {
        path: "/wishlist",
        element:<Wishlist></Wishlist>
      },
      {
        path: "/addBlog/:id",
        element: (
          <PrivateRoutes>
            <BlogDetails></BlogDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/addBlog/${params.id}`),
      },
      {
        path: "/allBlog",
        element: <AllBlog></AllBlog>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/addBlog`),
      },
      {
        path: "/comment",
        element: <BlogDetails></BlogDetails>,
      },
    ],
  },
]);
export default router;
