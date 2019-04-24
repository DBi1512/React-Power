import React from "react";
import Data from "./Data";

const Blog = ({ blogImage, blogTitle, blogPara }) => {
  return (
    <div className="blog__item item1 box-shadow">
      <img className="blog__img" src={blogImage} alt="something" />
      <h5>{blogTitle}</h5>
      <p>{blogPara}</p>
    </div>
  );
};

const renderBlog = Data.blog.map(({ blogImage, blogTitle, blogPara }) => (
  <Blog blogImage={blogImage} blogTitle={blogTitle} blogPara={blogPara} />
));

export default renderBlog;
