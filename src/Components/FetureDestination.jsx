const FetureDestination = () => {
  return (
    <div className="flex justify-center gap-4 mx-10 my-10">
      <div className="mx-auto" style={{ maxWidth: "600px" }}>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237684.58517849023!2d39.68172886652257!3d21.436254374414208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c9ce!2sMakkah%20Saudi%20Arabia!5e0!3m2!1sen!2sbd!4v1715335640330!5m2!1sen!2sbd"
          width="550"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-1/2">
        <img src="https://i.postimg.cc/76Vd53wZ/landing-plane-img.png" alt="" />
        <div className="pt-10 pb-5 space-y-7">
          <h2 className="text-4xl ">
            FEATURE <br /> DESTINATIONS ON THE <br /> MAP
          </h2>
          <p className="text-lg text-[#848484]">
            Our theme lets you{" "}
            <span className="text-[#f7775e]">integrate Google Maps</span> on any
            of your pages. Not only this, but the maps are fully customizable so
            you can use the style that fits you the most!{" "}
            <span className="underline">
              You can also easily pin the destinations{" "}
            </span>
            from your posts right on the map!
          </p>
        </div>
        <img src="https://i.postimg.cc/ryD7Vt7M/landing-map-logo.png" alt="" />
      </div>
    </div>
  );
};

export default FetureDestination;
