import { Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';

const dataArray = Array(10)
  .fill(undefined)
  .map((_, index) => ({
    column1: `column:1 row:${index}`,
    column2: `column:2 row:${index}`,
    column3: `column:3 row:${index}`,
    column4: `column:4 row:${index}`,
    id: index,
  }));
const FeturedBlog = ({ feturedBlog }) => {
  console.log(feturedBlog);
  const { _id, Blog_Name, owner_photo, Photo, Long_description } = feturedBlog;
  const columns = [
    { key: "Blog_Name", title: "Blog Name", dataType: DataType.String },
    { key: "owner_name", title: "Blog Owner", dataType: DataType.String },
    { key: "owner_photo", title: "Blog Owner Picture", dataType: DataType.String },
    // Add more columns as needed
  ];
  return (
    <div>
        <Table
      columns={columns}
      data={feturedBlog}
      editingMode={EditingMode.Cell}
      rowKeyField={'id'}
      sortingMode={SortingMode.Single}
    />
    </div>
  );
};

export default FeturedBlog;
