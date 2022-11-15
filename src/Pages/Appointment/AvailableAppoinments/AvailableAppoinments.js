import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentsOptions from "./AppoinmetsOptions/AppointmentsOptions";

const AvailableAppoinments = ({ selectedDate }) => {
  const [options, setOption] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("appoinmentOption.json")
      .then((res) => res.json())
      .then((data) => setOption(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h3 className="text-center">
        Available Appointments : {format(selectedDate, "PP")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {options.map((option) => (
          <AppointmentsOptions
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          />
        ))}
      </div>

      {treatment && (
        <BookingModal
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableAppoinments;
