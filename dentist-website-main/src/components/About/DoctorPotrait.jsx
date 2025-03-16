import React from "react";

import nursePotrait from "../../assets/images/doctor-potrait-pg-2.png";
import Image from "../Image/Image";

const DoctorPotrait = () => {
  return (
    <div className="w-full flex justify-center items-center my-[10%] relative">
      <div className="rounded-lg w-3/5 h-[26rem] border relative z-30 flex items-center justify-center overflow-hidden">
        {/* Circles */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="absolute rounded-full w-[100vw] h-[100vw] bg-blue-100"></div>
          <div className="absolute rounded-full w-[90vw] h-[90vw] bg-blue-400"></div>
          <div className="absolute rounded-full w-[80vw] h-[80vw] bg-blue-500"></div>
          <div className="absolute rounded-full w-[70vw] h-[70vw] bg-blue-600"></div>
          <div className="absolute rounded-full w-[60vw] h-[60vw] bg-blue-700"></div>
          <div className="absolute rounded-full w-[60vw] h-[60vw] bg-blue-800"></div>
          <div className="absolute rounded-full w-[50vw] h-[50vw] bg-blue-900"></div>
        </div>
      </div>

      <>
        {/* Image */}
        <Image source={nursePotrait} className="absolute bottom-0 z-40" />
      </>
    </div>
  );
};

export default DoctorPotrait;
