import React from "react";

const SingleCard = ({ info }) => {
  const { title, icon, desc, color } = info;
  return (
    <div className={`card shadow-xl ${color} text-white`}>
      <div className="card-body">
        <div className="flex justify-start items-center">
          <img src={icon} alt="icon" className="mr-5" />
          <div>
            <h2 className="card-title">{title}</h2>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
