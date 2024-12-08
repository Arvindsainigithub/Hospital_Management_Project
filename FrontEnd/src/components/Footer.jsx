import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Monday",
      time: "9:00AM - 11:00 PM",
    },
    {
      id: 2,
      day: "Tuesday",
      time: "12:00AM - 12:00 PM",
    },
    {
      id: 3,
      day: "Wednesday",
      time: "10:00AM - 10:00 PM",
    },
    {
      id: 4,
      day: "Thursday",
      time: "9:00AM - 9:00 PM",
    },
    {
      id: 5,
      day: "Friday",
      time: "9:00AM - 9:00 PM",
    },
    {
      id: 6,
      day: "Saturday",
      time: "9:00AM - 11:00 PM",
    },
    {
      id: 7,
      day: "Sunday",
      time: "9:00AM - 11:00 PM",
    },
  ];
  return (
    <>
      <hr />
      <footer className="container footer-flex">
        
        <div className="content content-image">
          <img src="/src/AllImages/logo.png" alt="logo" className="logo-img" />
        </div>
        <div className="quick">
          <h4>Quick Links</h4>
          <ul className="link-ul">
            <Link to={"/"}>Home</Link>
            <Link to={"/appointment"}>Appointment</Link>
            <Link to={"/about"}>About</Link>
          </ul>
        </div>
        <div className="hours">
          <h4>Hours</h4>
          {hours.map((element) => {
            return (
              <li key={element.id}>
                <span>{element.day}</span>
                <span>{element.time}</span>
              </li>
            );
          })}
        </div>
        <div className="contact">
          <h4>Contact</h4>
          <div>
            <FaPhone />
            <span>1800-333-444</span>
          </div>
          <div>
            <MdEmail />
            <span>healthcare@gmail.com</span>
          </div>
          <div>
            <FaLocationArrow/>
            <span>Noida, India</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
