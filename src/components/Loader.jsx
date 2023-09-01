import React from "react";
import "react-activity/dist/Dots.css";
import "react-activity/dist/Spinner.css";
import { Dots, Spinner } from "react-activity";

const Loader = () => {
  return (
    <div className="w-full flex justify-center items-center my-3">
      <Dots size={13} color="white" />
    </div>
  );
};

export default Loader;
