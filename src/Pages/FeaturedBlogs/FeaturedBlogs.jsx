import { useLoaderData } from "react-router-dom";
import "ka-table/style.css";
import { Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";

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

  // Define columns for the table
  const columns = [
    {
      key: "owner_photo",
      title: "Blog Owner Picture",
      dataType: DataType.String,
    },
    { key: "Owner_Name", title: "Blog Owner", dataType: DataType.String },
    { key: "Blog_Name", title: "Blog Name", dataType: DataType.String },
  ];

  // Map top10Blogs to the format expected by Ka-Table
  const tableData = top10Blogs.map((blog) => ({
    owner_photo: blog.owner_photo,
    Owner_Name: blog.displayName || "User Name Not Found",
    Blog_Name: blog.Blog_Name,
  }));

  return (
    <div>
      <Table
        columns={columns}
        data={tableData}
        editingMode={EditingMode.Cell}
        rowKeyField={"id"} // Assuming _id is the unique identifier for each blog
        sortingMode={SortingMode.Single}
      />
    </div>
  );
};

export default FeaturedBlogs;
