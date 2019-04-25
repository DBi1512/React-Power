import React from "react";
import Data from "./Data";

const Blog = ({ image, title, para }) => {
  return (
    <div className="blog__item item1 box-shadow">
      <img className="blog__img" src={image} alt="something" />
      <div className="blog__description">
        <h5>{title}</h5>
        <p>{para}</p>
      </div>
    </div>
  );
};

const renderBlogs = Data.blog.map(({ image, title, para }, index) => (
  <Blog key={index} image={image} title={title} para={para} />
));

const BlogApp = () => {
  return (
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
  );
};

export default BlogApp;
