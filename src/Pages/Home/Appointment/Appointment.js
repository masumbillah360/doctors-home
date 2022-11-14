import React from "react";
import bg from "../../../assets/images/bg.png";
import doctor from "../../../assets/images/doctor-small.png";

const Appointment = () => {
  return (
    <div className="hero h-[533px] bg-slate-600 text-white my-32 rounded-lg">
      <img className="w-full h-[533px]" src={bg} alt="" />
      <div className="hero-content flex-col lg:flex-row">
        <img src={doctor} className="w-1/2 h-[650px] mt-[-133px]" alt="" />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold pr-5">Make an appointment Today</h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
