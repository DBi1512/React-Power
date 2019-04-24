import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <p>copyright &#169; 2003-2012 ventus inc. all rights reserved.</p>
          <div className="social">
            <a href="#Footer" className="social__icon">
              <i className="fab fa-twitter" />
              <span>Twitter</span>
            </a>
            <a href="#Footer" className="social__icon">
              <i className="fab fa-facebook-f" />
              <span>Facebook</span>
            </a>
            <a href="#Footer" className="social__icon">
              <i className="fab fa-vimeo-v" />
              <span>Vimeo</span>
            </a>
            <a href="#Footer" className="social__icon">
              <i className="fab fa-youtube" />
              <span>Youtube</span>
            </a>
            <a href="#Footer" className="social__icon">
              <i className="fab fa-google-plus-g" />
              <span>Google+</span>
            </a>
            <a href="#Footer" className="social__icon">
              <i className="fab fa-pinterest-p" />
              <span>Pinterest</span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <a href="#top" className="anchor scroll-to-top">
          <i className="fas fa-angle-up" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
