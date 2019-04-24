import React from "react";

const Grid = () => {
  return <section>
  <div className="container">
    <div className="grid-container">
      <div className="grid__item">
        <fieldset className="border-top">
          <legend>
            <h4>Testimonials</h4>
          </legend>
        </fieldset>
        <div className="grid__item1">
          <div className="grid__subItem1 box-shadow">
            <h5>John Smith</h5>
            <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe a amet enim aliquam iure cum
              sapiente,
              sed porro nam in!"</p>
          </div>

          <div className="grid__subItem2 box-shadow">
            <h5>John Smith</h5>
            <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe a amet enim aliquam iure cum
              sapiente,
              sed porro nam in!"</p>
          </div>

          <div className="grid__subItem3 box-shadow">
            <h5>John Smith</h5>
            <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe a amet enim aliquam iure cum
              sapiente,
              sed porro nam in!"</p>
          </div>

          <div className="grid__subItem4 box-shadow">
            <h5>John Smith</h5>
            <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe a amet enim aliquam iure cum
              sapiente,
              sed porro nam in!"</p>
          </div>
        </div>
      </div>

      <div className="grid__item box-shadow">
        <fieldset className="border-top">
          <legend>
            <h4>Development</h4>
          </legend>
        </fieldset>

        <div className="tabs">
          <div className="tab">
            <input name="checkbox-tab-group" type="radio" id="checkbox1" className="checkboxtab" checked />
            <label for="checkbox1">Design</label>

            <div className="content">
              <h5>The Design</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim nemo totam ducimus saepe, earum
                quisquam
                hic a fugiat culpa molestias?</p>
              <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed ullam reprehenderit suscipit
                adipisci
                nihil iste similique eveniet aliquam. Libero.</p>
              <a href="#Grid">Read more</a>
            </div>
          </div>

          <div className="tab">
            <input name="checkbox-tab-group" type="radio" id="checkbox2" className="checkboxtab" />
            <label for="checkbox2">Product</label>
            <div className="content">
              <h5>Production</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, nihil iure. Quam qui iure minus
                voluptatum, maxime quo similique soluta commodi rem ratione natus molestias, omnis excepturi labore,
                eaque magnam!</p>
              <a href="#Grid">Read more</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
}

export default Grid;