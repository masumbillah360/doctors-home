import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import AppointmentBanner from "./AppoinmentBanner/AppointmentBanner";
import AvailableAppoinments from "./AvailableAppoinments/AvailableAppoinments";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvailableAppoinments selectedDate={selectedDate} />
      <Toaster />
    </div>
  );
};

export default Appointment;
