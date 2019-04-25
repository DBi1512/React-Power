import React from "react";
import Data from "./Data";

// const Development = ({ label, title, para, tag, btn, checked }) => {
class Development extends React.Component { 
  render(){
    const { label, title, para, tag, btn }= this.props
    // https://react.tips/radio-buttons-in-react-16/
    return (
      <div className="tab">
        <input
          name="checkbox-tab-group"
          type="radio"
          id={label} 
          value={label}
          className="checkboxtab"
        />
        <label htmlFor={label}>{label}</label>
  
        <div className="content">
          <h5>{title}</h5>
          <p>{para} </p>
          <a href={tag}>{btn}</a>
        </div>
      </div>
    );
  }
};

const renderDevelopment = Data.development.map(({ label, title, para, tag, btn }, index) => (
  <Development key={index} label={label} title={title} para={para} tag={tag} btn={btn}  />
));

export default renderDevelopment;
