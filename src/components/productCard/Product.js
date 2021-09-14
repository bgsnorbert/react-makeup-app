import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeartIcon from "../Icons/HeartIcon";
import Benefits from "../Benefits/Benefits";
import ProductCard from "./ProductCard";

const Product = () => {
  const { id } = useParams();
  const baseURL = "https://makeup-api.herokuapp.com/api/v1/products";
  const [product, setProduct] = useState([]);
  const [sameBrand, setSameBrand] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const request = await axios.get(`${baseURL}/${id}.json`);
      setProduct(request.data);
      console.log(request);
    };
    getProduct();
  }, [id]);

  useEffect(() => {
    const getSameBrandProduct = async () => {
      const request = await axios.get(`${baseURL}.json?brand=${product.brand}`);
      setSameBrand(request.data);
      console.log(request.data);
    };
    getSameBrandProduct();
  }, [product]);

  const linkStyle = {
    textDecoration: "none",
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-12">
          <h5>{product.name}</h5>
        </div>
        <div className="col-12">
          {/* breadcrumb */}
          <span>
            <Link
              className="text-secondary"
              style={linkStyle}
              to={"/react-makeup-app/"}
            >
              Home
            </Link>
          </span>
          <span>
            {" "}
            /{" "}
            <Link
              className="text-secondary"
              style={linkStyle}
              to={"/react-makeup-app/"}
            >
              {product.product_type}
            </Link>
          </span>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-sm-5 col-12 text-center my-auto">
          <img
            className="img-fluid w-50"
            src={`https:${product.api_featured_image}`}
            alt={product.name}
          />
        </div>
        <div className="col-sm-7 col-12 my-auto">
          <div className="col-12 text-secondary">
            <HeartIcon /> add to favorites
          </div>
          <div className="col-12 mt-3 text-warning">
            <h6 className="mb-0">{product.product_type}</h6>
          </div>
          <div className="col-12">
            <h4>{product.brand}</h4>
            <h4>{product.name}</h4>
          </div>
          <div className="row my-3 mt-4 text-center justify-content-center">
            <h5 className="text-secondary">Colors:</h5>
            {/* <div className="col-12 justify-content-center my-3"> */}
            {product.product_colors && product.product_colors.length > 0 ? (
              product.product_colors.map((res) => {
                return (
                  <div
                    key={res.hex_value}
                    className="col-2 px-1 text-center py-1 my-2"
                  >
                    <div
                      title={res.colour_name}
                      className="mx-auto"
                      style={{
                        backgroundColor: res.hex_value,
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <div>{res.colour_name}</div>
                  </div>
                );
              })
            ) : (
              <div>no colors found.</div>
            )}
            {/* </div> */}
          </div>
          <div className="row mt-5">
            <div className="col-4">
              <h4>{`${product.price}`}&euro;</h4>
            </div>
            <div className="col-4"></div>
            <div className="col-4 text-end">
              <Link
                to={"/react-makeup-app/"}
                className="btn btn-warning rounded-pill px-4"
              >
                add to basket
              </Link>
            </div>
          </div>
          <div className="col-12 mt-3">{product.description}</div>
        </div>
        <div className="row " style={{ minHeight: "50vh" }}>
          <div className="col-12">
            <h3 className="text-center my-5">Recommended</h3>
          </div>
          {sameBrand.length > 0 ? (
            sameBrand.slice(0, 6).map((res) => {
              return (
                <div className="col-4" key={`recommended${res.id}`}>
                  <ProductCard
                    img={res.api_featured_image}
                    title={res.name}
                    description={res.brand}
                    price={res.price}
                    link={res.id}
                    alt={res.name}
                  />
                </div>
              );
            })
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      <Benefits />
    </div>
  );
};

export default Product;
