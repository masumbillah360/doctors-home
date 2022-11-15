import React from "react";
import teeth from "../../../assets/images/treatment.png";

const DentalCare = () => {
  return (
    <div className="grid grid-cols-12 justify-center items-center md:px-32 my-36">
      <img
        src={teeth}
        className="rounded-lg shadow-2xl col-span-12 md:col-span-5 w-full"
        alt=""
      />
      <div className="col-span-12 md:col-span-7">
        <h1 className="text-5xl font-bold">Box Office News!</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
};

export default DentalCare;
