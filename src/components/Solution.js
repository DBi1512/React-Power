import React from "react";
import Data from "./Data";

const Solution = ({ solutionHeader1, solutionHeader2, solutionPara, solutionTag, solutionBtn }) => {
  return (
    <div className="solution-method">
      <i className="fa fa-mobile-alt" />
      <h3 className="solution__header">
        <strong>{solutionHeader1}</strong>
        {solutionHeader2}
      </h3>
      <p className="solution__para">{solutionPara}</p>
      <a className="solution__tag" href={solutionTag}>
        {solutionBtn}
      </a>
    </div>
  );
};

const renderSolution = Data.solution.map(
  ({ solutionHeader1, solutionHeader2, solutionPara, solutionTag, solutionBtn }) => (
    <Solution
      solutionHeader1={solutionHeader1}
      solutionHeader2={solutionHeader2}
      solutionPara={solutionPara}
      solutionTag={solutionTag}
      solutionBtn={solutionBtn}
    />
  ),
);

export default renderSolution;
