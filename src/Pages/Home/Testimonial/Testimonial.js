import React from "react";
import colon from "../../../assets/icons/quote.svg";
import people from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import SingleTestimonial from "./SingleTestimonial";

const Testimonial = () => {
  const feedBackInfo = [
    {
      desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      thumb: people,
      name: "Winson Herry",
      address: "Dhaka",
    },
    {
      desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      thumb: people2,
      name: "Caty",
      address: "Dhaka",
    },
    {
      desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      thumb: people3,
      name: "Winson Parry",
      address: "Dhaka",
    },
  ];
  return (
    <div className="my-16">
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-primary font-bold">Testimonial</h5>
          <h3 className="text-3xl">What Our Patients Says</h3>
        </div>
        <img className="w-44" src={colon} alt="" />
      </div>

      <div className="grid grid-cols-3 gap-5">
        {feedBackInfo.map((info, idx) => (
          <SingleTestimonial key={idx} info={info} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
