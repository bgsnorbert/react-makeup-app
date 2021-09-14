import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../productCard/ProductCard";

const TopProducts = () => {
  const baseURL = "http://makeup-api.herokuapp.com/api/v1/products";
  const [products, setProducts] = useState([]);

  const getTopProducts = async () => {
    const request = await axios.get(`${baseURL}.json?product_tags=ecocert`);
    setProducts(request.data);
    console.log(request);
  };

  useEffect(() => {
    getTopProducts();
  }, []);

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-6">
          <h3 className="fw-bold">Top Products</h3>
        </div>
        <div className="col-6 text-end">
          <Link to={"/about"} className="btn btn-warning rounded-pill px-4">
            See more
          </Link>
        </div>
        {products.length > 0 ? (
          <>
            {products.map((product) => {
              return (
                <ProductCard
                  link={product.id}
                  key={product.id}
                  img={product.api_featured_image}
                  alt={product.name}
                  title={product.name}
                  description={product.brand}
                  price={product.price}
                />
              );
            })}
          </>
        ) : (
          <div>Loading...</div>
        )}
        <div className="h-75"></div>
        <div className="my-5"></div>
        <div className="my-5"></div>
        <div className="my-5"></div>
      </div>
    </div>
  );
};

export default TopProducts;
