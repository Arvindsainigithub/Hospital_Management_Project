import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Department = () => {
    const departmentsArray = [
      {
        name: "Pediatrics",
        imageUrl: "/src/AllImages/pedia.jpg",
      },
      {
        name: "Orthopedics",
        imageUrl: "/src/AllImages/ortho.jpg",
      },
      {
        name: "Cardiology",
        imageUrl: "/src/AllImages/cardio.jpg",
      },
      {
        name: "Neurology",
        imageUrl: "/src/AllImages/neuro.jpg",
      },
      {
        name: "Oncology",
        imageUrl: "/src/AllImages/onco.jpg",
      },
      {
        name: "Radiology",
        imageUrl: "/src/AllImages/radio.jpg",
      },
      {
        name: "Physical Therapy",
        imageUrl: "/src/AllImages/therapy.jpg",
      },
      {
        name: "Dermatology",
        imageUrl: "/src/AllImages/derma.jpg",
      },
      {
        name: "ENT",
        imageUrl: "/src/AllImages/ent.jpg",
      },
    ];
  const responsive = {
    extralarge: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide:1,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide:1,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide:1,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide:1,
    },
  };
  return (
    <div className="container departments">
      <h3>Departments</h3>
      <Carousel responsive={responsive} removeArrowOnDeviceType={["medium","smaill"]}>{
        departmentsArray.map((depart, index)=>{
          return(
            <div className="card" key={index}>
              <div className="depart-name">{depart.name}</div>
              <img src={depart.imageUrl } alt={depart.imageUrl} />
            </div>
          )
        })
        }
      </Carousel>
    </div>
  );
};

export default Department;
