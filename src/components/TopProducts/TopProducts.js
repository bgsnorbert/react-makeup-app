import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../productCard/ProductCard";

const TopProducts = () => {
  const baseURL = "https://makeup-api.herokuapp.com/api/v1/products";
  const [products, setProducts] = useState([]);
  const [allBrand, setAllBrand] = useState([]);

  const getTopProducts = async () => {
    const request = await axios.get(`${baseURL}.json?product_tags=ecocert`);
    setProducts(request.data);
    setAllBrand(
      request.data.map((item) => {
        return item.brand;
      })
    );
    console.log(request);
  };

  if (allBrand.length > 0) {
    console.log(`allbrand: ${allBrand}`);
  }

  useEffect(() => {
    getTopProducts();
  }, []);

  // if (products.length > 0) {
  //   const newBrandArray = products.map((product) => {
  //     return product.brand;
  //   });
  //   const uniqueNames = Array.from(new Set(newBrandArray));
  //   console.log(`uniqnames: ${uniqueNames}`);
  // }

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-6">
          <h3 className="fw-bold">Top Products</h3>
        </div>
        <div className="col-6 text-end">
          <Link
            to={"/react-makeup-app/about"}
            className="btn btn-warning rounded-pill px-4"
          >
            See more
          </Link>
        </div>
        {products.length > 0 ? (
          <>
            {products.map((product) => {
              return (
                <ProductCard
                  width="14rem"
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
