import React from "react";
import Image from "../Image/Image";
import shieldLogo from "../../assets/images/Item-01.png";
import doctor_potrait from "../../assets/images/doctor-potrait-removebg-preview.png";
import floating_badge_1 from "../../assets/images/Item-08.png";
import floating_badge_2 from "../../assets/images/Item-03.png";
import floating_badge_3 from "../../assets/images/Item-04.png";

const DoctorCard = () => {
  return (
    <div className="bg-background pb-14">
      <div className="flex justify-center items-center relative">
        {/**Outer most circle */}
        <div className="w-[30rem] h-[30rem] rounded-full border-4 border-dotted border-gray-300 flex justify-center items-center relative">
          <Image source={shieldLogo} className="absolute top-1 left-12" />
          <Image
            source={floating_badge_2}
            className="absolute -right-36 z-10"
          />
          {/**Second circle */}
          <div className="w-[24rem] h-[24rem] rounded-full border-4 border-dotted border-gray-300 flex justify-center items-center">
            <Image source={floating_badge_1} className="absolute left-0 z-10" />
            <Image
              source={floating_badge_2}
              className="absolute left-12 z-10 bottom-12"
            />
            {/**Third circle)*/}
            <div className="w-[18rem] h-[18rem] rounded-full flex justify-center items-center bg-blue-700 relative">
              <Image
                source={doctor_potrait}
                className="absolute bottom-0 w-60"
              />
              {/**Fourth circle */}
              <div className="w-[12rem] h-[12rem] rounded-full flex justify-center items-center bg-blue-600">
                {/**Inner circle */}
                <div className="w-[6rem] h-[6rem] rounded-full bg-blue-500 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
