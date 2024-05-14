import { useLoaderData } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import { Helmet } from "react-helmet";
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
  const columns = [
    "Serial_Number",
    "Blog_Title",
    "Blog_Owner",
    "Blog_Owner_Picture",
  ];

  const data = top10Blogs.map((blog, index) => [
    <h1 key={blog._id} className="ml-16">
      {index + 1}
    </h1>,
    blog.Blog_Name,
    blog.displayName || "Not Found",
    blog.owner_photo ? (
      <img
        src={blog.owner_photo}
        alt="User"
        className="w-12 h-12 rounded-full ml-16"
      />
    ) : (
      <img
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        alt="Random"
        className="w-12 h-12 rounded-full ml-16"
      />
    ),
  ]);

  const options = {
    filterType: "checkbox",
  };
  return (
    <div className="featured-blogs">
      <Helmet>
        <title>Fetured_Blog</title>
      </Helmet>
      <MUIDataTable
        title={"Top 10 Post"}
        data={data}
        columns={columns}
        options={options}
        className="responsive-table"
      />
    </div>
  );
};

export default FeaturedBlogs;
