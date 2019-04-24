import React from "react";
import imagePlaceholder from "../img/img-placeholder.png";

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <fieldset className="border-top">
          <legend>
            <h4>Recent Work</h4>
          </legend>
        </fieldset>

        <div className="blog">
          <div className="blog__item item1 box-shadow">
            <img className="blog__img" src={imagePlaceholder} alt="something" />
            <h5>Blog Title</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui sequi quam veritatis totam quibusdam?</p>
          </div>

          <div className="blog__item item2 box-shadow">
            <img className="blog__img" src={imagePlaceholder} alt="something" />
            <h5>Blog Title</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui sequi quam veritatis totam quibusdam?</p>
          </div>

          <div className="blog__item item3 box-shadow">
            <img className="blog__img" src={imagePlaceholder} alt="something" />
            <h5>Blog Title</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui sequi quam veritatis totam quibusdam?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
