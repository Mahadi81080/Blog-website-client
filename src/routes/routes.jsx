import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddBlog from "../Pages/AddBlog/AddBlog";
import Home from "../Pages/Home/Home";
import AllBlog from "../Pages/AllBlog/AllBlog";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
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
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/addBlog/:id",
        element: <BlogDetails></BlogDetails>,
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
