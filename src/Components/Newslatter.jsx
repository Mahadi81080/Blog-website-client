import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Newslatter = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { email } = data;
    if (email) {
      toast.success("Thank you for subscribing to our newslatter !");
    } else {
      toast.error("Something went wrong.");
    }
  };
  return (
    <div className="mx-10 my-10 ">
      <div className="text-center space-y-5 my-7">
        <h2 className="text-4xl font-semibold text-[#f7775e]">
          Backpack Traveler
        </h2>
        <p className="font-medium">
          Stay in the loop with our{" "}
          <span className="text-[#f7775e]">_Backpack Traveler_</span>{" "}
          newsletter! Get a weekly dose of curated content straight to your
          inbox, featuring the hottest articles, trending topics, and insider
          insights from our blog. Dive deeper into the stories that matter most
          to you, access exclusive sneak peeks, and be the first to know about
          upcoming events, promotions, and giveaways. Join our community of
          passionate readers and never miss a beat – subscribe now and join the
          buzz!
        </p>
      </div>
      <div className="w-full bg-gray-500 dark:bg-gray-500 bg-[url('https://source.unsplash.com/random/640x480')] bg-center bg-cover bg-blend-multiply rounded-md">
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading-none text-center text-gray-400 dark:text-white">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100 dark:text-white">
            Find out about events and other news
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
            <input
              type="email"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
              {...register("email", { required: true })}
            />
            <input
              type="submit"
              value="Add Blog"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 dark:bg-[#f7775e] text-gray-900 dark:text-gray-50"
            />
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Newslatter;
