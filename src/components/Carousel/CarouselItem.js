import React from "react";
import { Link } from "react-router-dom";

const CarouselItem = ({ img, h1, p, classes }) => {
  return (
    <div className={`carousel-item ${classes}`}>
      <div className="row mt-5">
        <div className="col-md-5 col-12">
          <h1 className="fw-bold">{h1}</h1>
          <p className="my-4">{p}</p>
          <Link
            to={"/react-makeup-app/about"}
            className="btn btn-warning rounded-pill px-4"
          >
            See more
          </Link>
        </div>
        <div className="col-md-7 col-12">
          <img src={img} className="img-fluid" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
