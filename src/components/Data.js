/* HEADER =====================================*/

// const headerImage = require("../img/Header-img.png"); or:
import headerImage from "../img/Header-img.png";

const headerTitle = {
  header1: "Powerfully simple",
  header2: " with a ",
  header3: "Squeeky clean ",
  header4: "design.",
};
const headerPara = "Find out how you can offer quick and powerful solutions for your customers now!";

const headerTagBtn = "Learn more";

const headerTag = "#root";

const HeaderData = { headerImage, headerTitle, headerPara, headerTagBtn, headerTag };

/* BIGQUOTE ==================================*/

const bigQuoteHeader = {
  bigQuote1: "Create a ",
  bigQuote2: "powerful ",
  bigQuote3: "solution now!",
};

const bigQuoteBtn = "Get started";

const bigQuoteTag = "#bigQuote";

const BigQuoteData = { bigQuoteHeader, bigQuoteBtn, bigQuoteTag };

/* SOLUTION ================================= */



/* DATA ======================================*/
const Data = { HeaderData, BigQuoteData };
export default Data;
