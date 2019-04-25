/* HEADER ================================== */

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

/* BIGQUOTE ================================== */

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
    header1: "Superbly ",
    header2: "responsive",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam reiciendis neque laboriosam quis sunt ad!",
    tag: "#solution",
    btn: "Read more",
  },
  {
    header1: "Squeeky ",
    header2: "clean",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam reiciendis neque laboriosam quis sunt ad!",
    tag: "#solution",
    btn: "Read more",
  },
  {
    header1: "Multi ",
    header2: "purpose",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam reiciendis neque laboriosam quis sunt ad!",
    tag: "#solution",
    btn: "Read more",
  },
  {
    header1: "Highly ",
    header2: "flexible",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam reiciendis neque laboriosam quis sunt ad!",
    tag: "#solution",
    btn: "Read more",
  },
];

/* BLOG ====================================== */

const blog = [
  {
    image: require("../img/img-placeholder.png"),
    title: "Blog Title",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui sequi quam veritatis totam quibusdam?",
  },
  {
    image: require("../img/img-placeholder.png"),
    title: "Blog Title",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui sequi quam veritatis totam quibusdam?",
  },
  {
    image: require("../img/img-placeholder.png"),
    title: "Blog Title",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui sequi quam veritatis totam quibusdam?",
  },
];

/* GRID ===================================== */

const testimonial = [
  {
    name: "John Smith",
    para:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe a amet enim aliquam iure cum sapiente, sedporro nam in!",
  },
  {
    name: "John Smith",
    para:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe a amet enim aliquam iure cum sapiente, sedporro nam in!",
  },
  {
    name: "John Smith",
    para:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe a amet enim aliquam iure cum sapiente, sedporro nam in!",
  },
  {
    name: "John Smith",
    para:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe a amet enim aliquam iure cum sapiente, sedporro nam in!",
  },
];

/* DEVELOPMENT ============================== */

const development = [
  {
    label: "Design",
    title: "The Design",
    para:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nemo totam ducimus saepe, earumquisquamhic a fugiat culpa molestias? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nemo totam ducimus saepe, earumquisquamhic a fugiat culpa molestias?",
    tag: "#Development",
    btn: "Read more",
  },
  {
    label: "Product",
    title: "Production",
    para:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nemo totam ducimus saepe, earumquisquamhic a fugiat culpa molestias?",
    tag: "#Development",
    btn: "Read more",
  },
];

/* CONTACTQUOTE ============================= */

const contactQuote = {
  title: "Get in touch with us ",
  italicStrong: "now!",
  tag: "#contactQuote",
  btn: "Contact us",
};

/* ABOUT US ================================= */



/* FOOTER =================================== */

const footerPara = "copyright © 2003-2012 ventus inc. all rights reserved.";

const socialBtn = [
  {
    tag: "#Footer",
    className: "fab fa-twitter",
    spanBtn: "Twitter",
  },
  {
    tag: "#Footer",
    className: "fab fa-facebook-f",
    spanBtn: "Facebook",
  },
  {
    tag: "#Footer",
    className: "fab fa-vimeo-v",
    spanBtn: "Vimeo",
  },
  {
    tag: "#Footer",
    className: "fab fa-youtube",
    spanBtn: "Youtube",
  },
  {
    tag: "#Footer",
    className: "fab fa-google-plus-g",
    spanBtn: "Google+",
  },
  {
    tag: "#Footer",
    className: "fab fa-pinterest-p",
    spanBtn: "Pinterest",
  },
];

/* DATA ===================================== */
const Data = {
  headerData,
  bigQuoteData,
  solution,
  blog,
  testimonial,
  development,
  contactQuote,
  footerPara,
  socialBtn,
};
export default Data;