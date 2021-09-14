import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ img, title, description, price, link, alt }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 mt-5 mx-auto">
      <Link
        to={`/react-makeup-app/product/${link}`}
        style={{ textDecoration: "none" }}
      >
        <div className="card productCard text-dark mx-auto">
          <img src={img} className="card-img-top" alt={alt} />
          <div className="card-body">
            <h6 className="card-title text-warning">{title}</h6>
            <p className="card-text">{description}</p>
            <h3>{price}&euro;</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
