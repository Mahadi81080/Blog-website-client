import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const BlogDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { Blog_Name, Photo, Short_description, Long_description } = details;
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
       // Send data to the server
       fetch(`${import.meta.env.VITE_API_URL}/comment`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) =>
        res.json().then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Success",
              text: "Blog added successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          }
        })
      );
  };
  return (
    <div>
      <Helmet>
        <title>View_Details</title>
      </Helmet>
      <div className=" px-5 lg:px-10 mt-4">
        <div className="bg-[#f7f2ee] p-20 mb-8 text-center font-extrabold text-3xl">
          <h2>Blog Details</h2>
        </div>
        <section className=" bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
          <div className="container flex justify-center  flex-col mx-auto lg:flex-row">
            <div className="flex flex-col px-3 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/3 xl:w-3/5  text-gray-900">
              <img src={Photo} alt="" className="max-h-screen" />
            </div>
            <div className="w-full lg:w-1/2 xl:w-2/5 text-black p-5 space-y-3 mt-10">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="flex gap-5 items-center ">
                  <p className="text-lg font-medium leading-snug">
                    Blog_Title:
                  </p>
                  <p className="leading-snug">{Blog_Name}</p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="flex gap-5 items-center">
                  <p className="text-lg font-medium leading-snug">
                    Spot description : <span className="text-base font-normal">{Short_description}</span>
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 sm:space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <div className="flex gap-5 ">
                  <p className="text-lg font-medium leading-snug">
                    Long_description : <span className="text-base font-normal">{Long_description}</span>
                  </p>
      
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control col-span-full mt-10">
                  <div className=" text-center mb-3">
                    <span className="label-text text-lg">Comment</span>
                  </div>
                  <textarea
                    type="text"
                    name="comment"
                    placeholder="Enter Your Comment"
                    className="input input-bordered h-40"
                    {...register("Comment")}
                  />
                </label>
                <input
                  type="submit"
                  value="Add Blog"
                  className="btn btn-block bg-[#d2b48c] col-span-full mt-3"
                />
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetails;
