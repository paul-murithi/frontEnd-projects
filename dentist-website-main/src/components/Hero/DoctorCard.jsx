import React from "react";

const DoctorCard = () => {
  return (
    <div className="bg-background">
      <div className="flex justify-center items-center">
        <div className="w-[30rem] h-[30rem] rounded-full border-4 border-dotted border-gray-300 flex justify-center items-center">
          <div className="w-[24rem] h-[24rem] rounded-full border-4 border-dotted border-gray-300 flex justify-center items-center">
            <div className="w-[18rem] h-[18rem] rounded-full flex justify-center items-center bg-blue-700">
              <div className="w-[12rem] h-[12rem] rounded-full flex justify-center items-center bg-blue-600">
                <div className="w-[6rem] h-[6rem] rounded-full bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
