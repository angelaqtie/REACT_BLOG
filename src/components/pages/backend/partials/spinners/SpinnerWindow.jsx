import React from "react";
import Spinner from "./Spinner";

const SpinnerWindow = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-light z-50 bg-opacity-70 flex items-center justify-center">
      <Spinner diameter="w-[60px]" css="stroke-accent" />
    </div>
  );
};

export default SpinnerWindow;
