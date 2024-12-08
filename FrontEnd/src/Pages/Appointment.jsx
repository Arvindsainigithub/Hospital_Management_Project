import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";
const Appointment = () => {
  return (
    <>
      <div className="container">
        <Hero
          title={"Schedule Your Appointment | ZeeCare medical institute"}
          imageUrl={"/src/AllImages/signin.png"}
        />
        <AppointmentForm />
      </div>
    </>
  );
};

export default Appointment;