import { useForm } from "react-hook-form";
import slider from "../assets/h4-slider-img-2.png";
import slider2 from "../assets/h4-slider-img-3.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Banner = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
    fetch(`${import.meta.env.VITE_API_URL}/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
        if (data.insertedId) {
         toast.success(`${formData.name} Your Booking Successfully`)
        }
      })
    );
    
  };

  return (
    <div className="hero md:min-h-screen lg:min-h-screen bg-[#f7f2ee]">
      <div className="hero-content flex-col md:flex-row lg:flex-row">
        <div className=" md:w-1/2 lg:w-1/2 relative flex items-center -ml-28 md:pl-16 lg:-ml-0 lg:pl-10">
          <img
            data-aos="fade-right"
            data-aos-duration="800"
            src={slider}
            className="z-10 h-72 lg:h-auto"
          />
          <img
            data-aos="fade-down-left"
            data-aos-duration="500"
            src={slider2}
            alt=""
            className="h-56 lg:h-72 absolute left-44 md:left-60 lg:left-64"
          />
        </div>
        <div className=" md:w-1/2 lg:w-1/2 text-center lg:pr-8">
          <h1 className=" text-3xl lg:text-5xl">
            BEST MONEY-SAVING TRAVEL TIPS !
          </h1>
          <p className="py-6 text-base lg:text-lg">
            See how I helped real readers plan,save and go to the trip of a
            lifetime.And gets{" "}
            <span className="text-[#f77b62]">
              actionable steps you can use to travel anywhere
            </span>
            ._no matteryour income or where you are from
          </p>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn bg-[#f77b62] text-white"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Book Tour
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-xl text-left">Book A Tour</h3>
              <div className="divider"></div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Name"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Your Email"
                      className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <select className="select select-bordered w-full" {...register("person",{ required: true })}>
                    <option disabled selected>
                      How Many Person?
                    </option>
                    <option value='1 Person'>1 Person</option>
                    <option value='2 Person'>2 Person</option>
                    <option value='3 Person'>3 Person</option>
                  </select>
                  <select className="select select-bordered w-full"{...register("days", { required: true })}>
                    <option disabled selected>
                      How Many Days?
                    </option>
                    <option value='2 Days'>2 Days</option>
                    <option value='3 Days'>3 Days</option>
                    <option value='4 Days'>4 Days</option>
                  </select>
                  <textarea
                    className="textarea textarea-bordered w-full h-28"
                    placeholder="Your Message"
                    {...register("Message")}
                  ></textarea>
                </div>
                <button className="block rounded-2xl p-3 text-center dark:text-gray-50 bg-orange-400">
                  Book Now
                </button>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Banner;
