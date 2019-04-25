import React from "react";
import Data from "./Data";

// class Development extends React.Component {
//   render() {
//     const { label, title, para, tag, btn } = this.props;
//     return (
//       <div className="tab">
//         <label htmlFor={label}>{label}</label>
//         <input id={label} name="checkbox-tab-group" type="radio" className="checkboxtab" />

//         <div className="content">
//           <h5>{title}</h5>
//           <p>{para} </p>
//           <a href={tag}>{btn}</a>
//         </div>
//       </div>
//     );
//   }
// }

// label same with id, click the label to specify which input is used
const Development = ({ label, title, para, tag, btn }) => {
  return (
    <div className="tab">
      <label htmlFor={label}>{label}</label>
      <input id={label} name="checkbox-tab-group" type="radio" className="checkboxtab" />

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
