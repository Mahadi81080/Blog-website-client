import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleWishlist = ({ wishlist, lists, setLists }) => {
  const { Blog_Name, Photo, Category, Short_description } = wishlist;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/wishlist/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success",
              });
              const remaining = lists.filter((list) => list._id !== _id);
              setLists(remaining);
            }
          });
      }
    });
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
          <Link className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#f77b62] text-[#f77b62]">
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#f77b62] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-[#f77b62] transition duration-300 group-hover:text-white ease">
              Details
            </span>
          </Link>
          <button
            onClick={() => handleDelete(wishlist._id)}
            className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#f77b62] text-[#f77b62]"
          >
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#f77b62] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-[#f77b62] transition duration-300 group-hover:text-white ease">
              Remove
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default SingleWishlist;
