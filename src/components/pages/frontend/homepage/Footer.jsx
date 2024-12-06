import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-16  ">
      <div className="container">
        <div className="grid grid-cols-[1fr_2fr] mb-16">
          <div className="footer-info flex flex-col min-h-[300px] justify-between">
            <div>
              <h3 className="uppercase mb-5">Fylla</h3>
              <ul>
                <li>Fylla Digital Agency</li>
                <li>Main Street</li>
                <li>16 Lisbon</li>
              </ul>
            </div>
            <ul className="flex gap-5">
              <li className="size-[30px] center-all rounded-full border border-black text-xs">
                <a href="">TW</a>
              </li>
              <li className="size-[30px] center-all rounded-full border border-black text-xs">
                <a href="">IN</a>
              </li>
              <li className="size-[30px] center-all rounded-full border border-black text-xs">
                <a href="">BE</a>
              </li>
            </ul>
          </div>

          <div className="footer-links grid grid-cols-3 gap-5 pl-5 border-l border-light">
            <div>
              <h4 className="font-['syne'] mb-10 text-2xl font-normal">
                Pages
              </h4>
              <ul className="mb-10 space-y-5">
                <li>
                  <Link to="/" className="uppercase">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Studio
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Contact
                  </Link>
                </li>
              </ul>

              <Link className="btn-animate" data-text="More Templates">
                More Templates
              </Link>
            </div>

            <div>
              <h4 className="font-['syne'] mb-10 text-2xl font-normal">CMS</h4>
              <ul className="mb-10 space-y-5">
                <li>
                  <Link to="/" className="uppercase">
                    Work
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Work Single
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Blog Post
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-['syne'] mb-10 text-2xl font-normal">
                Utilitis
              </h4>
              <ul className="mb-10 space-y-5">
                <li>
                  <Link to="/" className="uppercase">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Studio
                  </Link>
                </li>
                <li>
                  <Link to="/" className="uppercase">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center uppercase pt-10 border-t border-light mb-5">
          <p>© Made by Pawel Gola - Powered by Webflow</p>

          <ul className="flex gap-5">
            <li>Privacy</li>
            <li>Imprint</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
