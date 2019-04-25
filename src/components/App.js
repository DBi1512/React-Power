import React, { Component } from "react";
import Header from "./Header";
import BigQuote from "./BigQuote";
import SolutionApp from "./Solution";
import BlogApp from "./Blog";
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
        <SolutionApp />
        <BlogApp />
        <Grid />
        <ContactQuote contactQuote={Data.contactQuote} />
        <AboutUs />
        <Footer footerPara={Data.footerPara} />
      </div>
    );
  }
}

export default App;
