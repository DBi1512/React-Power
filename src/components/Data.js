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

const headerData = { headerImage, headerTitle, headerPara, headerTagBtn, headerTag };

/* BIGQUOTE ==================================*/

const bigQuoteHeader = {
  bigQuote1: "Create a ",
  bigQuote2: "powerful ",
  bigQuote3: "solution now!",
};

const bigQuoteBtn = "Get started";

const bigQuoteTag = "#bigQuote";

const bigQuoteData = { bigQuoteHeader, bigQuoteBtn, bigQuoteTag };

/* SOLUTION ================================= */

const solution = [
  {
    solutionHeader1: "Superbly ",
    solutionHeader2: "responsive",
    solutionPara:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam reiciendis neque laboriosam quis sunt ad!",
    solutionTag: "#solution",
    solutionBtn: "Read more",
  },
  {
    solutionHeader1: "Squeeky ",
    solutionHeader2: "clean",
    solutionPara:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam reiciendis neque laboriosam quis sunt ad!",
    solutionTag: "#solution",
    solutionBtn: "Read more",
  },
  {
    solutionHeader1: "Multi ",
    solutionHeader2: "purpose",
    solutionPara:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam reiciendis neque laboriosam quis sunt ad!",
    solutionTag: "#solution",
    solutionBtn: "Read more",
  },
  {
    solutionHeader1: "Highly ",
    solutionHeader2: "flexible",
    solutionPara:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam reiciendis neque laboriosam quis sunt ad!",
    solutionTag: "#solution",
    solutionBtn: "Read more",
  },
];

/* BLOG ======================================*/

const blog = [
  {
    blogImage: require("../img/img-placeholder.png"),
    blogTitle: "Blog Title",
    blogPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui sequi quam veritatis totam quibusdam?",
  },
  {
    blogImage: require("../img/img-placeholder.png"),
    blogTitle: "Blog Title",
    blogPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui sequi quam veritatis totam quibusdam?",
  },
  {
    blogImage: require("../img/img-placeholder.png"),
    blogTitle: "Blog Title",
    blogPara: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui sequi quam veritatis totam quibusdam?",
  },
];

/* DATA ======================================*/
const Data = { headerData, bigQuoteData, solution, blog };
export default Data;
