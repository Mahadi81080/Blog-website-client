import { useLoaderData } from "react-router-dom";
import FeturedBlog from "../../Components/FeturedBlog";
const FeaturedBlogs = () => {
  const feturedBlogs = useLoaderData();
  console.log(feturedBlogs);
  const calculateWordCount = (Long_description) => {
    const words = Long_description.split(/\s+/);
    return words.length;
  };

  const sortedBlogs = feturedBlogs.sort(
    (a, b) =>
      calculateWordCount(b.Long_description) -
      calculateWordCount(a.Long_description)
  );
  const top10Blogs = sortedBlogs.slice(0, 10);

 

  return (
    <div>
      {
        top10Blogs.map(feturedBlog=><FeturedBlog key={feturedBlog._id} feturesBlog={feturedBlog}></FeturedBlog>)
      }
    </div>
  );
};

export default FeaturedBlogs;
