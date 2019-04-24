import React from "react";
import Data from "./Data";

const Testimonial = ({ name, para, index }) => {
  return (
    <div className={"grid__subItem" + index + " box-shadow"}>
      <h5>{name}</h5>
      <p>{para}</p>
    </div>
  );
};

const renderTestimonials = Data.testimonial.map(({ name, para }, index) => (
  <Testimonial key={index} name={name} para={para} index={index + 1} />
));

export default renderTestimonials;
