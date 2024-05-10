const Banner = () => {
  return (
    <div className="hero min-h-screen bg-[#f7f2ee]">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative flex items-center pl-10">
          <img
            src="https://i.postimg.cc/KjjJKZkV/h4-slider-img-2.png"
            className="z-10"
          />
          <img src="https://i.postimg.cc/pXZKNNm5/h4-slider-img-3.png" alt="" className="h-72 absolute left-64" />
        </div>
        <div className="w-1/2 text-center pr-8">
          <h1 className="text-5xl">BEST MONEY-SAVING TRAVEL TIPS !</h1>
          <p className="py-6 text-lg">
            See how I helped real readers plan,save and go to the trip of a lifetime.And gets <span className="text-[#f77b62]">actionable steps you can use to travel anywhere</span>._no matteryour income or where you are from
          </p>
          <button className="btn bg-[#f77b62] text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
