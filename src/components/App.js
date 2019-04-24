import React, { Component } from "react";
import Header from "./Header";
import BigQuote from "./BigQuote";
import Solution from "./Solution";
import Blog from "./Blog";
import Grid from "./Grid";
import ContactQuote from "./ContactQuote";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

import Data from "./Data";

class App extends Component {

  render() {
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

    return (
      <div>
        <Header header={Data.headerData} />
        <BigQuote bigQuote={Data.bigQuoteData} />

        <section className="border-top">
          <div className="container">
            <div className="solution">{renderSolution}</div>
          </div>
        </section>
        
        <Blog />
        <Grid />
        <ContactQuote />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}

export default App;
