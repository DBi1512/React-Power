import React from "react";

const ContactQuote = () => {
  return (
    <section id="contactQuote">
      <div className="container">
        <div className="bigQuote">
          <div>
            <h2 className="bigQuote__header">
              Get in touch with us <strong className="italic">Now!</strong>
            </h2>
          </div>

          <div className="button">
            <a className="bigQuote__tag" href="#ContactQuote">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactQuote;
