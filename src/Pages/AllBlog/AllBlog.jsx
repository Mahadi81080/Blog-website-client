import { useLoaderData } from "react-router-dom";
import Blog from "../../Components/Blog";
import { useState } from "react";
import { useForm } from "react-hook-form";

const AllBlog = () => {
  const allBlogs = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTitle, setSearchTitle] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);

  // Function to handle category change
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    filterBlogs(category, searchTitle);
  };

  // Function to filter blogs based on selected category and search title
  const filterBlogs = (category, title) => {
    let filteredData = allBlogs;
    if (category !== "all") {
      filteredData = filteredData.filter((blog) => blog.Category === category);
    }
    if (title) {
      const searchTitleLowerCase = title.toLowerCase();
      filteredData = filteredData.filter((blog) =>
        blog.Blog_Name.toLowerCase().includes(searchTitleLowerCase)
      );
    }
    setFilteredBlogs(filteredData);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setSearchTitle(data.title.toLowerCase());
    filterBlogs(selectedCategory, data.title.toLowerCase());
  };
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
      <div className="flex justify-center gap-10">
        <select
          onChange={handleCategoryChange}
          name="category"
          id="category"
          className="h-12 rounded-md border border-gray-300"
        >
          <option value="all">All Categories</option>
          <option value="Travel">Travel</option>
          <option value="Food and Cooking">Food and Cooking</option>
          <option value="Health and Wellness">Health and Wellness</option>
          <option value="Fashion and Style">Fashion and Style</option>
        </select>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter Blog Title"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3 border border-gray-300"
            {...register("title", { required: true })}

          />
          <input
            type="submit"
            value="Search"
            className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 dark:bg-[#f7775e] text-gray-900 dark:text-gray-50"
          />
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 mx-10">
        {filteredBlogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default AllBlog;
