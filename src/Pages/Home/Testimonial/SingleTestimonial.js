import React from "react";

const SingleTestimonial = ({ info }) => {
  const { thumb, desc, name, address } = info;
  return (
    <div className="card shadow-xl">
      <div className="card-body">
        <p>{desc}</p>
        <div className="card-actions justify-start items-center">
          <img src={thumb} alt="" />
          <div className="ml-3">
            <h3 className="font-bold">{name}</h3>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
