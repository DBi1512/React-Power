import React from "react";
import Data from "./Data";

const SocialBtn = ({ tag, className, spanBtn }) => {
  return (
    <a href={tag} className="social__icon">
      <i className={className} />
      <span>{spanBtn}</span>
    </a>
  );
};

const renderSocialBtn = Data.socialBtn.map(({ tag, className, spanBtn }, index) => (
  <SocialBtn key={index} tag={tag} className={className} spanBtn={spanBtn} />
));

const Footer = props => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <p>{props.footerPara}</p>
          <div className="social">{renderSocialBtn}</div>
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
