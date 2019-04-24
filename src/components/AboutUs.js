import React from "react";

const AboutUs = () => {
  return (
    <section id="information">
      <div className="container">
        <div className="information__items">
          <div className="information__item">
            <h4>About us</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nulla sapiente asperiores laborum
              consequuntur perferendis.
            </p>
            <address>
              123 Street Name <br />
              Road Name <br />
              London <br />
              +44 74139 13807
            </address>
          </div>

          <div className="information__item">
            <h4>Latest Tweets</h4>
            <p>
              <strong>&#64;Jaynesh</strong> just submitted another great item on <strong>&#35;themeforest</strong>
            </p>
            <time>about 3 hours ago</time>
            <br />
            <br />
            <p>
              <strong>&#64;Jaynesh</strong> working on an awesome theme for <strong>&#35;themeforest</strong>
            </p>
            <time>about 3 weeks ago</time>
          </div>

          <div className="information__item">
            <h4>Latest Posts</h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <hr />
            <p>Lorem ipsum dolor sitdfljn sdfauansdyf spyptykm ayasdnakj amet consectetur.</p>
            <hr />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="information__item">
            <h4>Flickr</h4>
            <div className="flickr">
              <div className="flickr__item" />
              <div className="flickr__item" />
              <div className="flickr__item" />
              <div className="flickr__item" />
              <div className="flickr__item" />
              <div className="flickr__item" />
              <div className="flickr__item" />
              <div className="flickr__item" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
