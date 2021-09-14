import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./productCard/ProductCard";
import Spinner from "./Spinner";

const Shop = () => {
  const Style = {
    input: { maxWidth: "100%" },
    inputBg: { backgroundColor: "#fbfbfb" },
  };

  const [baseURL, setBaseURL] = useState(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const [items, setItems] = useState([]);
  // const [settings, setSettings] = useState({
  //   minPrice: 0,
  //   maxPrice: 100,
  //   selectBrand: "",
  //   sortBy: "",
  // });

  useEffect(() => {
    const getItems = async () => {
      const request = await axios.get(baseURL);
      setItems(request.data);
      console.log(request);
    };
    getItems();
  }, [baseURL]);

  const handleChangeBrand = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "All") {
      setBaseURL("http://makeup-api.herokuapp.com/api/v1/products.json");
    } else {
      setBaseURL(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${value}`
      );
    }
    // const { name, value } = e.target;

    // setSettings((prevValue) => {
    //   return {
    //     ...prevValue,
    //     [name]: value,
    //   };
    // });
  };

  return (
    <div className="container">
      <div className="row shopTopBg my-5"></div>
      <div className="row my-5">
        <div className="col-2 p-3" style={Style.inputBg}>
          <div className="row">
            <h6 className="mb-3">Select price</h6>

            <div className="col-6">
              {/* <span>{settings.minPrice}</span> */}
              <input
                disabled
                // onChange={handleChange}
                name="minPrice"
                className="mx-auto d-block"
                style={Style.input}
                // value={settings.minPrice}
                type="number"
              />
              <span className="text-secondary text-center d-block">min.</span>
            </div>
            <div className="col-6">
              {/* <span>{settings.maxPrice}</span> */}
              <input
                disabled
                // onChange={handleChange}
                name="maxPrice"
                className="mx-auto d-block"
                style={Style.input}
                // value={settings.maxPrice}
                type="number"
              />
              <span className="text-secondary text-center d-block">max.</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul>
                {/* remove duplicates */}
                {/* {items.map((item) => {
                  return <li>{item.product_type}</li>;
                })} */}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-10 pt-3">
          <div className="row">
            <div className="col-4">
              <h6>Brands</h6>
              <select
                onChange={handleChangeBrand}
                name="selectBrand"
                className="form-select"
                aria-label="Default select example"
              >
                {/* remove duplicates */}

                <option defaultValue>All</option>
                {items.map((item) => {
                  return (
                    <option key={`brand${item.id}`} value={item.brand}>
                      {item.brand}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-4">
              <h6>Sort by</h6>
              <select
                // onChange={handleChange}
                name="sortBy"
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue>default</option>
                {/* <option value="priceL">price low to high</option>
                <option value="priceH">price high to low</option> */}
              </select>
              {/* <span>{settings.sortBy}</span> */}
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row">
            {items.length > 0 ? (
              items.map((item) => {
                return (
                  <div className="col-4" key={item.id}>
                    <ProductCard
                      img={item.api_featured_image}
                      alt={item.name}
                      title={item.name}
                      description={item.brand}
                      price={item.price}
                      link={item.id}
                    />
                  </div>
                );
              })
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
