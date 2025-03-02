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
        {/** Outer most circle */}
        <div className="w-[80vw] h-[80vw] max-w-[30rem] max-h-[30rem] rounded-full border-4 border-dotted border-gray-300 flex justify-center items-center relative">
          {/** Shield Logo */}
          <Image
            source={shieldLogo}
            className="absolute top-1 left-[10%] w-[20%] max-w-16"
          />
          {/** Floating Badge 3 */}
          <Image
            source={floating_badge_3}
            className="absolute right-0 bottom-[40%] z-10 w-[60%] min-w-[4rem]"
          />
          {/** Second circle */}
          <div className="w-[65%] h-[65%] rounded-full border-4 border-dotted border-gray-300 flex justify-center items-center">
            {/** Floating Badge 1 */}
            <Image
              source={floating_badge_1}
              className="absolute left-0 z-10 w-[40%] min-w-[4rem]"
            />
            {/** Floating Badge 2 */}
            <Image
              source={floating_badge_2}
              className="absolute left-[15%] z-10 bottom-[8%] w-[70%] min-w-[3rem]"
            />
            {/** Third circle */}
            <div className="w-[75%] h-[75%] rounded-full flex justify-center items-center bg-blue-700 relative">
              {/** Doctor Portrait */}
              <Image
                source={doctor_potrait}
                className="absolute bottom-0 w-[70%] max-w-60"
              />
              {/** Fourth circle */}
              <div className="w-[65%] h-[65%] rounded-full flex justify-center items-center bg-blue-600">
                {/** Inner circle */}
                <div className="w-[50%] h-[50%] rounded-full bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DoctorCard;
