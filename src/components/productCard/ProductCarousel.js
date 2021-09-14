import React from "react";

const ProductCarousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide container my-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <h1> Slide 1</h1>
        </div>
        {/* <div className="carousel-item">
          <h1>Slide 2 </h1>
        </div>
        <div className="carousel-item active">
          <h1> Slide 3</h1>
        </div> */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ProductCarousel;
