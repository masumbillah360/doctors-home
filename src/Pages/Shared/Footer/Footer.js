import React from "react";
import { Link } from "react-router-dom";
import footerImg from "../../../assets/images/footer.png";

const Footer = () => {
  const style = {
    backgroundImage: footerImg,
    backgroundSize: "100 100",
  };
  return (
    <footer
      className="footer p-10 flex justify-between flex-col md:flex-row"
      style={style}
    >
      <div>
        <span className="footer-title">Services</span>
        <Link to="/" className="link link-hover">
          Emergency Checkup
        </Link>
        <Link to="/" className="link link-hover">
          Monthly Checkup
        </Link>
        <Link to="/" className="link link-hover">
          Weekly Checkup
        </Link>
        <Link to="/" className="link link-hover">
          Deep Checkup
        </Link>
      </div>
      <div>
        <span className="footer-title">ORAL HEALTH</span>
        <Link to="/" className="link link-hover">
          Fluoride Treatment
        </Link>
        <Link to="/" className="link link-hover">
          Cavity Filling
        </Link>
        <Link to="/" className="link link-hover">
          Teath Whitening
        </Link>
      </div>
      <div>
        <span className="footer-title">OUR ADDRESS</span>
        <Link to="/" className="link link-hover">
          New York - 101010 Hudson
        </Link>
        <Link to="/" className="link link-hover">
          Privacy policy
        </Link>
        <Link to="/" className="link link-hover">
          Cookie policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
