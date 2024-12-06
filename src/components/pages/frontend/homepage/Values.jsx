import React from "react";

const Values = () => {
  return (
    <section className="value">
      <h2 className="uppercase text-center py-10 border-b border-light text-6xl font-normal font-[syne] mb-10">
        Our Values
      </h2>
      <div className="container">
        <div className="grid grid-cols-2 gap-10">
          <div className="value-img pr-5 ">
            <img
              src="https://assets-global.website-files.com/63661389dd2417f19a0d89d3/63695645ae15af53f7884f58_home-values-p-1080.webp"
              alt=""
              className="rounded-lg h-full object-cover"
            />
          </div>
          <div className="value-content pl-14 border-l border-light">
            <div className="space-y-10 ">
              <div className="grid grid-cols-[40px_1fr] mb-5 gap-5 border-b border-light py-5">
                <span className="size-[45px] center-all inline-block border border-light rounded-full text-xl">
                  01
                </span>
                <div>
                  <h4 className="font-[syne] font-normal text-2xl mb-5 uppercase">
                    Vision
                  </h4>
                  <p className="text-lg leading-loose">
                    Our relentless pursuit of a shared vision fuels our
                    creativity and propels us forward. With clarity and
                    foresight, we craft strategies that align with our clients'
                    goals and aspirations, transforming their dreams into
                    reality and shaping a future worth embracing.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[40px_1fr] mb-5 gap-5 border-b border-light py-5">
                <span className="size-[45px] center-all inline-block border border-light rounded-full text-xl">
                  01
                </span>
                <div>
                  <h4 className="font-[syne] font-normal text-2xl mb-5 uppercase">
                    Vision
                  </h4>
                  <p className="text-lg leading-loose">
                    Our relentless pursuit of a shared vision fuels our
                    creativity and propels us forward. With clarity and
                    foresight, we craft strategies that align with our clients'
                    goals and aspirations, transforming their dreams into
                    reality and shaping a future worth embracing.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[40px_1fr] mb-5 gap-5 border-b border-light py-5">
                <span className="size-[45px] center-all inline-block border border-light rounded-full text-xl">
                  01
                </span>
                <div>
                  <h4 className="font-[syne] font-normal text-2xl mb-5 uppercase">
                    Vision
                  </h4>
                  <p className="text-lg leading-loose">
                    Our relentless pursuit of a shared vision fuels our
                    creativity and propels us forward. With clarity and
                    foresight, we craft strategies that align with our clients'
                    goals and aspirations, transforming their dreams into
                    reality and shaping a future worth embracing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
