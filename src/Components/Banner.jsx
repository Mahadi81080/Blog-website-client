import { motion } from "framer-motion";
import slider  from "../assets/h4-slider-img-2.png";
import slider2  from "../assets/h4-slider-img-3.png";
const Banner = () => {
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
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={() => {}}
            onHoverEnd={() => {}}
            className="btn bg-[#f77b62] text-white"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
