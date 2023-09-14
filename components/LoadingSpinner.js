import React from "react";
import { Bars } from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <div className=" h-screen flex items-center justify-center ">
      <Bars
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default LoadingSpinner;
