import { useLoaderData } from "react-router-dom";
import Blog from "../../Components/Blog";
 

const AllBlog = () => {
  const allBlogs = useLoaderData();
  const { Blog_Name, Photo, Category, Short_description } = allBlogs;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 mx-10">
      {allBlogs.map((blog) => (
        <Blog key={blog._id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default AllBlog;
