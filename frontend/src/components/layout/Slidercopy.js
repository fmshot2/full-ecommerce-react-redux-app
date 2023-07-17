import React from "react";

const Slider = () => {
  return (
    <div>
      <section className="theme-slider section-py-space home-slide">
        <div className="custom-container">
          <div className="row slider-layout-4">
            <div className="col-xl-10 slider-slide ">
              <div className="slide-1 no-arrow">
                <div>
                  <div className="slider-banner slide-banner-3">
                    <div className="slider-img" style={{backgroundColor: "#d3ecf3"}}>
                      <ul className="layout4-slide-1">
                        <li id="img-1">
                          <img
                            src="../assets/images/layout-4/slider/1.1.png"
                            className="img-fluid"
                            alt="slider"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="slider-banner-contain">
                      <div>
                        <h5>last chance to Grab</h5>
                        <h3>headphones</h3>
                        <h1>new earphones</h1>
                        <h2>wireless headphone only $99</h2>{" "}
                        <a
                          href="product-page(left-sidebar).html"
                          className="btn btn-normal"
                        >
                          shop now
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


 
    </div>
  );
};

export default Slider;
