import React from "react";

const SingleService = ({ service }) => {
  const { title, img, desc } = service;
  return (
    <div className="card shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SingleService;
