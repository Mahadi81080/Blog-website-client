import { useLoaderData } from "react-router-dom";
import SingleComment from "../../Components/SingleComment";
import { Helmet } from "react-helmet";
const Comment = () => {
  const allComments = useLoaderData();
  console.log(allComments);

  return (
    <div className="min-h-screen my-6">
      <Helmet>
        <title>Comments</title>
      </Helmet>
      <div className="bg-slate-100  p-20 mb-8 text-center font-extrabold text-lg lg:text-3xl">
        <h2>All our blog post comments are given below</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 ">
        {allComments.map((singleComment) => (
          <SingleComment
            key={singleComment._id}
            singleComment={singleComment}
          ></SingleComment>
        ))}
      </div>
    </div>
  );
};

export default Comment;
