import React from "react";
import bg from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="hero min-h-sceen">
      <img className="w-full h-full" src={bg} alt="" />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="w-1/2 rounded-lg shadow-2xl" alt="" />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold pr-5">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.Already Have an account?Login Here!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
