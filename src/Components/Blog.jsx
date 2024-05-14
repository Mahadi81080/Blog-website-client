import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';

const Blog = ({ blog }) => {
  const { user } = useContext(AuthContext);
  const { _id, Blog_Name, Photo, Category, Short_description } = blog;
  const handleWishlist = () => {
    if (user?.email === blog.email) {
      return toast.error("Owner not added item");
    }
  };
  return (
    <article
      data-aos="zoom-in"
      data-aos-duration="1000"
      className="flex flex-col dark:bg-gray-50 rounded-md shadow-md"
    >
      <a
        rel="noopener noreferrer"
        href="#"
        aria-label="Te nulla oportere reprimique his dolorum"
      >
        <PhotoProvider>
          <PhotoView src={Photo}>
            <img
              alt=""
              className="object-cover w-full h-52 dark:bg-gray-500 rounded-t-md"
              src={Photo}
            />
          </PhotoView>
        </PhotoProvider>
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Te nulla oportere reprimique his dolorum"
        ></a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="text-xs tracking-wider uppercase hover:underline dark:text-[#f77b62]"
        >
          {Category}
        </a>
        <h3 className="flex-1 py-2 text-2xl font-semibold leading-snug">
          {Blog_Name}
        </h3>
        <p className="text-sm">{Short_description}</p>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
          <Link
            to={`/addBlog/${_id}`}
            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#f77b62] text-[#f77b62]"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#f77b62] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-[#f77b62] transition duration-300 group-hover:text-white ease">
              Details
            </span>
          </Link>
          <button
            onClick={handleWishlist}
            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#f77b62] text-[#f77b62]"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#f77b62] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-[#f77b62] transition duration-300 group-hover:text-white ease">
              Wishlist
            </span>
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </article>
  );
};

export default Blog;
