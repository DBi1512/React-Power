import React from "react";

const BigQuote = () => {
  return (
    <section id="bigQuote">
      <div className="container">
        <div className="bigQuote">
          <div>
            <h2 className="bigQuote__header">
              Create a <strong className="italic">powerful</strong> solution now!
            </h2>
          </div>

          <div className="button">
            <a className="bigQuote__tag" href="#bigQuote">
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigQuote;
