import React, { Component } from "react";
import Header from "./Header";
import BigQuote from "./BigQuote";
import renderSolution from "./Solution";
import renderBlog from "./Blog";
import Grid from "./Grid";
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
            <div className="solution">{renderSolution}</div>
          </div>
        </section>

        <section id="blog">
          <div className="container">
            <fieldset className="border-top">
              <legend>
                <h4>Recent Work</h4>
              </legend>
            </fieldset>
            <div className="blog">{renderBlog}</div>
          </div>
        </section>

        <Grid />
        <ContactQuote />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default App;
