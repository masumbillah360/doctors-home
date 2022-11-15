import { format } from "date-fns";
import React from "react";
import toast from "react-hot-toast";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  //   const { name, slots } = treatment;
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
      name,
      bookingDate: date,
      slot,
      email,
      phone,
    };
    console.log(bookingInfo);
    setTreatment(null);
    toast.success("successfully added a treatment");
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
              className="input input-bordered w-full"
            />
            <input
              placeholder="Phone Number"
              name="phone"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
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
