import React from "react";
import Data from "./Data";

const Solution = ({ header1, header2, para, tag, btn }) => {
  return (
    <div className="solution-method">
      <i className="fa fa-mobile-alt" />
      <h3 className="solution__header">
        <strong>{header1}</strong>
        {header2}
      </h3>
      <p className="solution__para">{para}</p>
      <a className="solution__tag" href={tag}>
        {btn}
      </a>
    </div>
  );
};

const renderSolutions = Data.solution.map(({ header1, header2, para, tag, btn }, index) => (
  <Solution key={index} header1={header1} header2={header2} para={para} tag={tag} btn={btn} />
));

const SolutionApp = () => {
  return (
    <section className="border-top">
      <div className="container">
        <div className="solution">{renderSolutions}</div>
      </div>
    </section>
  );
};

export default SolutionApp;
