import React from "react";
import { Link } from "react-router-dom";

const RecommendedProducts = () => {
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-sm-6 col-12">
          <h3 className="fw-bold">Recommended</h3>
        </div>
        <div className="col-sm-6 col-12 text-end">
          <Link to={"/about"} className="btn btn-warning rounded-pill px-4">
            See more
          </Link>
        </div>
        <div className="my-5"></div>
        <div className="my-5"></div>
        <div className="my-5"></div>
        <div className="my-5"></div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
