import React from "react";

const BigQuote = props => {
  const { bigQuoteHeader, bigQuoteTag, bigQuoteBtn } = props.bigQuote;
  return (
    <section id="bigQuote">
      <div className="container">
        <div className="bigQuote">
          <div>
            <h2 className="bigQuote__header">
              {bigQuoteHeader.bigQuote1}
              <strong className="italic">{bigQuoteHeader.bigQuote2}</strong>
              {bigQuoteHeader.bigQuote3}
            </h2>
          </div>

          <div className="button">
            <a className="bigQuote__tag" href={bigQuoteTag}>
              {bigQuoteBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigQuote;
