import React from "react";
import Appointment from "./Appointment/Appointment";
import Banner from "./Banner/Banner";
import DentalCare from "./DentalCare/DentalCare";
import InfoCard from "./InfoCard/InfoCard";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <InfoCard />
      <Services />
      <DentalCare />
      <Appointment />
      <Testimonial />
    </div>
  );
};

export default Home;
