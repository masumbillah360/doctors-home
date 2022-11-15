import React from "react";

const ContactUs = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="text-center">
          <h5 className="text-primary font-bold mb-2">Contact Us</h5>
          <h3 className="text-3xl mb-6">Stay Connected with us</h3>
          <div>
            <form>
              <input
                className="input input-bordered w-full mb-5"
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="input input-bordered w-full mb-5"
                type="text"
                name="sub"
                placeholder="Subject"
              />
              <textarea
                className="w-full block textarea textarea-bordered mb-5"
                placeholder="Your Message..."
                rows="4"
                cols=""
              />
              <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
