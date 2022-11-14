import React from "react";
import Appointment from "./Appointment/Appointment";
import Banner from "./Banner/Banner";
import DentalCare from "./DentalCare/DentalCare";
import InfoCard from "./InfoCard/InfoCard";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <InfoCard />
      <Services />
      <DentalCare />
      <Appointment />
    </div>
  );
};

export default Home;
