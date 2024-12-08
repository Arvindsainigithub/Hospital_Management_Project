import React from "react";
const Hero = ({title, imageUrl}) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            ducimus tempore quaerat consequatur molestias nemo cum rem odio
            dolorum officia. Quibusdam inventore error at voluptate temporibus?
            Quod voluptas modi maiores!
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="Hero" className="animated-image" />
          <span>
            <img src="src/AllImages/Vector.png" alt="Vector" />
          </span>
        </div>
      </div>
    </>
  );
};
export default Hero;
