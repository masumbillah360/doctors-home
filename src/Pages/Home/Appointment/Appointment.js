import React from "react";
import doctor from "../../../assets/images/doctor-small.png";

const Appointment = () => {
  return (
    <div className="hero bg-slate-600 text-black my-32 rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={doctor}
          className="w-full md:w-1/2 h-[700px] mt-[-120px]"
          alt=""
        />
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-5xl font-bold md:pr-5">
            Make an appointment Today
          </h1>
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
