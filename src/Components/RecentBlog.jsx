import { useLoaderData } from "react-router-dom";
 
import { Typewriter } from "react-simple-typewriter";
import Blog from "./Blog";

const RecentBlog = () => {
  const recentBlog = useLoaderData();
  const sixBlogs = recentBlog.slice(0, 6);

  return (
    <div>
      <div className="max-w-xl mx-auto text-center space-y-3 my-6">
        <h2 className=" text-4xl font-semibold text-[#ed5b31]">
          <Typewriter
            words={["Blog Spot"]}
            loop={5}
            cursor
            cursorStyle=""
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          ></Typewriter>
        </h2>
        <p className="font-medium">
          Blog spots are popular destinations that attract visitors from
          around the world due to their natural beauty, historical significance,
          cultural importance, or recreational opportunities.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mx-10">
        {sixBlogs.map((blog) => (
          <Blog key={blog._id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
