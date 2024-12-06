import React from "react";

const Banner = () => {
  return (
    <section className="banner py-16 border-b border-light">
      <div className="container">
        <div className="grid grid-cols-2 gap-10">
          <div className="banner-content max-w-[700px] w-full">
            <h1 className="text-[clamp(30px,_8vw,_6rem)] font-[syne] leading-[100%] font-semibold mb-10">
              We are a digital agency from Lisbon.
            </h1>
            <p className="text-[clamp(20px,_8vw,_25px)] max-w-[460px] w-full leading-relaxed">
              Elevating brands through creative digital solutions, proudly
              representing Lisbon's vibrant innovation.
            </p>
          </div>
          <div className="banner-image">
            <img
              src="https://cdn.prod.website-files.com/63661389dd2417f19a0d89d3/636a217e1f2ae9daeb711f25_home-hero-05-poster-00001.jpg"
              alt=""
              className="h-[550px] object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
