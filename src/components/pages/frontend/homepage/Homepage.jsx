import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import WhatWeDo from "./WhatWeDo";
import Work from "./Work";
import Values from "./Values";
import Footer from "./Footer";
import News from "./News";

const Homepage = () => {
  return (
    <>
      <div className="p-2">
        <div className="border border-light">
          <Header />
          <Banner />
          <WhatWeDo />
          <Work />
          <Values />
          <News title="Latest News" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Homepage;
