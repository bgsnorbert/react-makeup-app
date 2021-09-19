import React from "react";
import carouselImg from "../images/pic1.jpg";
import CarouselItem from "./CarouselItem";

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
            <CarouselItem
              classes="active"
              img={carouselImg}
              h1="The New lineup, Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit."
              p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
            />

            <CarouselItem
              classes=""
              img={carouselImg}
              h1="2The New lineup, Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit."
              p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
            />
            <CarouselItem
              classes=""
              img={carouselImg}
              h1="3The New lineup, Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit."
              p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
