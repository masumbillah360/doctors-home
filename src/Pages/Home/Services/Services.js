import React from "react";
import cavity from "../../../assets/images/cavity.png";
import flue from "../../../assets/images/fluoride.png";
import whitening from "../../../assets/images/whitening.png";
import SingleService from "./SingleService";

const Services = () => {
  const serviceInfo = [
    {
      img: flue,
      title: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      img: cavity,
      title: "Cavity Filling",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      img: whitening,
      title: "Teeth Whitening",
      desc: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="text-center mt-32">
      <h5 className="font-bold text-primary">Our Services</h5>
      <h3 className="text-3xl">Services We Provide</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {serviceInfo.map((service, idx) => (
          <SingleService key={idx} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
