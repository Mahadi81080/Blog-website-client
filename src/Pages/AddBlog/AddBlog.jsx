 
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";

const AddBlog = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Send data to the server
    fetch(`${import.meta.env.VITE_API_URL}/addBlog`, {
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
    <div className="mx-10 my-5">
      <Helmet>
        <title>Add_Blog</title>
      </Helmet>
      <section className="p-6 bg-[#f4f3f0] rounded-xl">
        <h2
          className="md:text-2xl lg:text-3xl font-semibold text-center "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Typewriter
            words={["Add Your Blog"]}
            cursor
            cursorStyle=""
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={800}
          ></Typewriter>
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col mx-auto space-y-12"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <fieldset className=" p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <label className="form-control col-span-full sm:col-span-3">
                <div className="label">
                  <span className="label-text">Blog_Name</span>
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Blog name"
                  className="input input-bordered "
                  {...register("Blog_Name")}
                />
              </label>
              <label className="form-control col-span-full sm:col-span-3">
                <div className="label">
                  <span className="label-text">Photo URL</span>
                </div>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter coffee photo"
                  className="input input-bordered "
                  {...register("Photo")}
                />
              </label>
              <label className="form-control col-span-full sm:col-span-3">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <select name="category" id="" {...register("Category")} className="h-12 rounded-md border border-gray-300">
                  <option value="Travel">Travel</option>
                  <option value="Food and Cooking">Food and Cooking</option>
                  <option value="Health and Wellness">Health and Wellness</option>
                  <option value="Fashion and Style">Fashion and Style</option>
                </select>
              </label>
              <label className="form-control col-span-full sm:col-span-3">
                <div className="label">
                  <span className="label-text">Short_description</span>
                </div>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Enter Blog description"
                  className="input input-bordered pt-3"
                  {...register("Short_description")}
                />
              </label>
              <label className="form-control col-span-full">
                <div className="label">
                  <span className="label-text">Long_description</span>
                </div>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Enter Blog description"
                  className="input input-bordered pt-3"
                  {...register("Long_description")}
                />
              </label>
              <input
                type="submit"
                value="Add Blog"
                className="btn btn-block bg-[#d2b48c] col-span-full"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddBlog;
