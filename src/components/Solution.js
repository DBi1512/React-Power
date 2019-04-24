import React from "react";

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

export default Solution;
