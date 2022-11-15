import React from "react";
import clock from "../../../assets/icons/clock.svg";
import locationIcon from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import SingleCard from "./SingleCard";
const InfoCard = () => {
  const cardInfo = [
    {
      icon: clock,
      title: "Opening Hourse",
      desc: "9.00 AM - 8.00 PM",
      color: "bg-primary",
    },
    {
      icon: locationIcon,
      title: "Visit Our Location",
      desc: "Dhaka, Bangladesh",
      color: "bg-secondary",
    },
    {
      icon: phone,
      title: "Contact Us Now",
      desc: "+880112233445",
      color: "bg-accent",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
      {cardInfo.map((card, idx) => (
        <SingleCard key={idx} info={card} />
      ))}
    </div>
  );
};

export default InfoCard;
