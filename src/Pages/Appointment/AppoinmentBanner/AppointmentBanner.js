import React from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="hero my-12">
      {/* <img className="" src={bg} alt="" /> */}
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="w-full md:w-1/2 rounded-lg shadow-2xl"
          alt=""
        />
        <div className="w-full md:w-1/2">
          <div className="flex justify-center items-center">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
