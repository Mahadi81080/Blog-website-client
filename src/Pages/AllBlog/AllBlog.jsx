import { useLoaderData } from "react-router-dom";
import Blog from "../../Components/Blog";

const AllBlog = () => {
  const allBlogs = useLoaderData();
  return (
    <div>
      <div className="max-w-2xl mx-auto my-10 text-center space-y-2">
        <h2 className="font-semibold tracking-wider uppercase text-4xl">
          OUR Blog Post
        </h2>
        <p className="text-xl text-[#838383]">
          See about your favorite travel destinations & our adventures
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 mx-10">
        {allBlogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default AllBlog;
