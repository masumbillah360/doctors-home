import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  //   const { name, slots } = treatment;
  const { user } = useContext(AuthContext);
  const bookingDate = format(selectedDate, "PP");

  const handleSub = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = bookingDate;
    const name = form.name.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const bookingInfo = {
      patientName: name,
      treatmentName: treatment?.name,
      bookingDate: date,
      slot,
      email,
      phone,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success("successfully added a treatment");
          console.log(bookingInfo);
          refetch();
        } else {
          toast.error(`${data.message}`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatment?.name}</h3>
          <form
            onSubmit={(e) => handleSub(e)}
            className="grid grid-cols-1 gap-5"
          >
            <input
              value={bookingDate}
              disabled
              name="date"
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {treatment?.slots.map((slot, idx) => (
                <option key={idx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              placeholder="Full Name"
              name="name"
              disabled
              defaultValue={user?.displayName}
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              disabled
              defaultValue={user?.email}
              className="input input-bordered w-full"
            />
            <input
              placeholder="Phone Number"
              name="phone"
              className="input input-bordered w-full"
            />

            <input type="submit" value="Submit" className="btn btn-accent" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
