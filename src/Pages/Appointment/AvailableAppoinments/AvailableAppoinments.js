import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentsOptions from "./AppoinmetsOptions/AppointmentsOptions";

const AvailableAppoinments = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: () =>
      fetch(`http://localhost:5000/v/slots?date=${date}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    return (
      <h1 className="text-center font-bold text-5xl text-red-500">
        Loading.....
      </h1>
    );
  }
  return (
    <div>
      <h3 className="text-center">
        Available Appointments : {format(selectedDate, "PP")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointmentOptions.map((option) => (
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
          refetch={refetch}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
};

export default AvailableAppoinments;
