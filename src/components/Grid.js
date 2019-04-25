import React from "react";
import renderTestimonials from "./Testimonials";
import renderDevelopment from "./Development";

const Grid = () => {
  return (
    <section>
      <div className="container">
        <div className="grid-container">
          <div className="grid__item">
            <fieldset className="border-top">
              <legend>
                <h4>Testimonials</h4>
              </legend>
            </fieldset>
            <div className="grid__item1">{renderTestimonials}</div>
          </div>

          <div className="grid__item box-shadow">
            <fieldset className="border-top">
              <legend>
                <h4>Development</h4>
              </legend>
            </fieldset>

            <div className="tabs">{renderDevelopment}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grid;