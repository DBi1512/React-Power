import React from "react";
import Data from "./Data";

const Blog = ({ image, title, para }) => {
  return (
    <div className="blog__item item1 box-shadow">
      <img className="blog__img" src={image} alt="something" />
      <h5>{title}</h5>
      <p>{para}</p>
    </div>
  );
};

const renderBlogs = Data.blog.map(({ image, title, para }, index) => (
  <Blog key={index} image={image} title={title} para={para} />
));

export default renderBlogs;
