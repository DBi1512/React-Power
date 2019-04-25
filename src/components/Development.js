import React from "react";
import Data from "./Data";

// label same with id, click the label to specify which input is used
const Development = ({ label, title, para, tag, btn }) => {
  return (
    <div className="tab">
      <input id={label} name="checkbox-tab-group" type="radio" className="checkboxtab" />
      <label htmlFor={label}>{label}</label>

      <div className="content">
        <h5>{title}</h5>
        <p>{para} </p>
        <a href={tag}>{btn}</a>
      </div>
    </div>
  );
};

const renderDevelopment = Data.development.map(({ label, title, para, tag, btn }, index) => (
  <Development key={index} label={label} title={title} para={para} tag={tag} btn={btn} />
));

export default renderDevelopment;
