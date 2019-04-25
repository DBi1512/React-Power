import React from "react";

const ContactQuote = props => {
  const { title, italicStrong, tag, btn } = props.contactQuote;
  return (
    <section id="contactQuote">
      <div className="container">
        <div className="bigQuote">
          <div>
            <h2 className="bigQuote__header">
              {title}
              <strong className="italic">{italicStrong}</strong>
            </h2>
          </div>

          <div className="button">
            <a className="bigQuote__tag" href={tag}>
              {btn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactQuote;
