import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
              <h1 className="display-2">
                Online Payment Mode <br />
                Easy For You
              </h1>
              <p className="main-hero-para">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-75 me-3 p-2 form-control-text"
                  placeholder="Enter your Email"
                />
                <div className="input-group-button"> Get it now</div>
              </div>
            </div>
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center  align-items-center main-herosection-images order-md-first order-sm-first">
              <img
                src="./images/hero1.jpg"
                className=" img-fluid"
                alt=" hero-img"
              />
              <img
                src="./images/hero4.jpg"
                className=" img-fluid main-hero-img2"
                alt=" hero-img"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;