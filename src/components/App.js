import React, { Component } from "react";
import Header from "./Header";
import BigQuote from "./BigQuote";
import renderSolutions from "./Solution";
import renderBlogs from "./Blog";
import renderTestimonials from "./Testimonials";
import renderDevelopment from "./Development";
import ContactQuote from "./ContactQuote";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

import Data from "./Data";

class App extends Component {
  render() {
    return (
      <div>
        <Header header={Data.headerData} />
        <BigQuote bigQuote={Data.bigQuoteData} />

        <section className="border-top">
          <div className="container">
            <div className="solution">{renderSolutions}</div>
          </div>
        </section>

        <section id="blog">
          <div className="container">
            <fieldset className="border-top">
              <legend>
                <h4>Recent Work</h4>
              </legend>
            </fieldset>
            <div className="blog">{renderBlogs}</div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="grid-container">
              <div className="grid__item">
                <fieldset className="border-top">
                  <legend>
                    <h4>Testimonials</h4>
                  </legend>
                </fieldset>
                <div className="grid__item1">{renderTestimonials}</div>
              </div>

              <div className="grid__item box-shadow">
                <fieldset className="border-top">
                  <legend>
                    <h4>Development</h4>
                  </legend>
                </fieldset>

                <div className="tabs">{renderDevelopment}</div>
              </div>
            </div>
          </div>
        </section>

        <ContactQuote contactQuote={Data.contactQuote} />
        <AboutUs />
        <Footer footerPara={Data.footerPara} />
      </div>
    );
  }
}

export default App;
