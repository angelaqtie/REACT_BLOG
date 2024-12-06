import React from "react";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <section className="work py-16 border-b border-light">
      <div className="container ">
        <div className="grid grid-cols-[1fr_2fr] gap-10 items-start">
          <div className="content sticky top-10">
            <h2 className="uppercase font-['syne'] font-normal text-7xl">
              Featured work
            </h2>
            <p className="text-[clamp(20px,_8vw,_25px)] mb-10 ">
              Showcasing our standout projects that blend creativity, strategy,
              and cutting-edge design.
            </p>

            <Link to="/" className="btn-animate" data-text="See All Work">
              See All Work
            </Link>
          </div>
          <div className="images pl-16 border-l border-light">
            <div className="card-lg">
              <Link to="/">
                <img
                  src="https://cdn.prod.website-files.com/63661389dd2417776f0d89fb/6369faf5dae2e9aa748edeaa_project-01-p-1600.webp"
                  alt=""
                  className="rounded-xl"
                />
              </Link>

              <ul className="flex justify-between items-center mb-10 border-b border-light py-5">
                <li className="font-['syne'] text-xl">Dancing Stars</li>
                <li>2022</li>
              </ul>
            </div>

            <div className="mb-10">
              <div className="work-top grid grid-cols-2 mb-10 ">
                <div className="card-sm pr-5">
                  <Link to="/">
                    <img
                      src="https://cdn.prod.website-files.com/63661389dd2417776f0d89fb/6369faf5dae2e9aa748edeaa_project-01-p-1600.webp"
                      alt=""
                      className="rounded-xl"
                    />
                  </Link>

                  <ul className="flex justify-between items-center  pt-5">
                    <li className="font-['syne'] text-xl">Dancing Stars</li>
                    <li>2022</li>
                  </ul>
                </div>
                <div className="card-sm pl-5 border-l border-light">
                  <Link to="/">
                    <img
                      src="https://cdn.prod.website-files.com/63661389dd2417776f0d89fb/6369faf5dae2e9aa748edeaa_project-01-p-1600.webp"
                      alt=""
                      className="rounded-xl"
                    />
                  </Link>

                  <ul className="flex justify-between items-center  pt-5">
                    <li className="font-['syne'] text-xl">Dancing Stars</li>
                    <li>2022</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <div className="work-top grid grid-cols-2 mb-10 ">
                <div className="card-sm pr-5">
                  <Link to="/">
                    <img
                      src="https://cdn.prod.website-files.com/63661389dd2417776f0d89fb/6369faf5dae2e9aa748edeaa_project-01-p-1600.webp"
                      alt=""
                      className="rounded-xl"
                    />
                  </Link>

                  <ul className="flex justify-between items-center  pt-5">
                    <li className="font-['syne'] text-xl">Dancing Stars</li>
                    <li>2022</li>
                  </ul>
                </div>
                <div className="card-sm pl-5 border-l border-light">
                  <Link to="/">
                    <img
                      src="https://cdn.prod.website-files.com/63661389dd2417776f0d89fb/6369faf5dae2e9aa748edeaa_project-01-p-1600.webp"
                      alt=""
                      className="rounded-xl"
                    />
                  </Link>

                  <ul className="flex justify-between items-center  pt-5">
                    <li className="font-['syne'] text-xl">Dancing Stars</li>
                    <li>2022</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
