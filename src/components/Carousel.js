import React from "react";
import carouselImg from "../components/images/pic1.jpg";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="container">
      <div className="row">
        {/* <div className="col-12"> */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active carouselSlideBtn"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              className="carouselSlideBtn"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              className="carouselSlideBtn"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row mt-5">
                <div className="col-md-5 col-12">
                  <h1 className="fw-bold">
                    The New lineup, Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </h1>
                  <p className="my-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link
                    to={"/about"}
                    className="btn btn-warning rounded-pill px-4"
                  >
                    See more
                  </Link>
                </div>
                <div className="col-md-7 col-12">
                  <img
                    //   style={{ maxHeight: "100vh" }}
                    src={carouselImg}
                    className="img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row mt-5">
                <div className="col-md-5 col-12">
                  <h1 className="fw-bold">
                    2The New lineup, Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </h1>
                  <p className="my-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link
                    to={"/about"}
                    className="btn btn-warning rounded-pill px-4"
                  >
                    See more
                  </Link>
                </div>
                <div className="col-md-7 col-12">
                  <img
                    //   style={{ maxHeight: "100vh" }}
                    src={carouselImg}
                    className="img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row mt-5">
                <div className="col-md-5 col-12">
                  <h1 className="fw-bold">
                    3The New lineup, Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </h1>
                  <p className="my-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link
                    to={"/about"}
                    className="btn btn-warning rounded-pill px-4"
                  >
                    See more
                  </Link>
                </div>
                <div className="col-md-7 col-12">
                  <img
                    //   style={{ maxHeight: "100vh" }}
                    src={carouselImg}
                    className="img-fluid"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
