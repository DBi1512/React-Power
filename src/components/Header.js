import React from "react";
import headerImage from "../img/Header-img.png";

const Header = props => {
  console.log(props);

  const { headerTitle, headerPara, headerTag, headerTagBtn } = props.header;
  return (
    <header>
      <div className="container section-header">
        <div className="header__item header__image">
          <img src={headerImage} alt="screen" />
        </div>

        <div className="header__item header__info">
          <h1 className="header__title">
            <strong className="italic">{headerTitle.header1}</strong>
            {headerTitle.header2}
            <strong className="italic">{headerTitle.header3}</strong>
            {headerTitle.header4}
          </h1>
          <p className="header__para">{headerPara}</p>
          <a className="header__tag" href={headerTag}>
            {headerTagBtn}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
