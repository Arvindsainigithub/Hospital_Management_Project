import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who we are</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
          accusantium sapiente quae iste minima enim iusto quasi nobis at, dicta
          nesciunt modi! Dolor, hic natus ea et debitis eos at. Aut amet eum
          reprehenderit consequatur quos ex in vero suscipit at. Ratione optio
          recusandae excepturi. 
        </p>
        <p>
          Consectetur, ex provident? Exercitationem animi omnis alias officiis
          reprehenderit iusto veniam magni commodi? Necessitatibus perferendis
          perspiciatis ipsam quidem qui rem deserunt dolore.
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
          cupiditate!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          cupiditate delectus illum?
        </p>
        <p>Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
};

export default Biography;
