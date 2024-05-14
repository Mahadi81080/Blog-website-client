import { motion } from "framer-motion"
const TravelEssential = () => {
  return (
    <div className="bg-[#f7f2ee] py-16">
      <div className=" text-center space-y-5 mb-5 md:-mb-10 lg:-mb-4">
        <h2 className=" text-2xl lg:text-4xl">MY TRAVEL ESSENTIALS</h2>
        <p className="text-[#838383] text-base lg:text-lg">
          We are the Backpack Traveler, your favorite travel assistants!
        </p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center">
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="h-96 md:h-40 lg:h-52"
          src="https://i.postimg.cc/yYXjs167/President-Waterproof-Fiber-Case-Medium-2-President-7370b-325043-removebg-preview.png"
          alt=""
        />
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="h-96 md:h-48 lg:h-72 md:mt-20 lg:mt-14 -ml-5"
          src="https://i.postimg.cc/FHHyv0nx/e75ddbda351d44e24b6b8099fa200aad-removebg-preview.png"
          alt=""
        />
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="h-72 md:h-40 lg:h-52 -mt-16 md:mt-7 lg:-mt-0"
          src="https://i.postimg.cc/DyFQC9rH/1571340595031-removebg-preview.png"
          alt=""
        />
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className=" md:h-36 md:mt-12 lg:h-52 lg:mt-7"
          src="https://i.postimg.cc/X77GB4cj/webimage-196-F0079-4-C2-B-46-AD-A0516-D32-B8-ACFBD8-removebg-preview.png"
          alt=""
        />
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="h-36 md:h-24 lg:h-[125px] mt-20"
          src="https://i.postimg.cc/bwZZLgB4/61-AQ3g2wc6-L-AC-UY1100-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default TravelEssential;
