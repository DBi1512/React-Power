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
    return (
      <div>
        <Header
          header={Data.HeaderData}
        />
        <BigQuote />
        <Solution />
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
