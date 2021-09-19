import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../Spinner";
import brandAndCategory from "../brandAndCategory/brandAndCategory";
import handleSortByPrice from "./sortByPrice";

const Shop = () => {
  const Style = {
    input: { maxWidth: "100%" },
    inputBg: { backgroundColor: "#fbfbfb" },
  };

  const [baseURL, setBaseURL] = useState(
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=annabelle"
  );
  const [items, setItems] = useState([]);
  const [sortItems, setSortItems] = useState("default");

  useEffect(() => {
    const getItems = async () => {
      const request = await axios.get(baseURL);
      setItems(request.data);
      console.log(request);
    };
    getItems();
  }, [baseURL]);

  const handleChangeBrand = (e) => {
    setItems([]);
    const value = e.target.value;
    if (value === "All") {
      setBaseURL("https://makeup-api.herokuapp.com/api/v1/products.json");
    } else {
      setBaseURL(
        `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${value}`
      );
    }
  };

  const handleChangeSort = (e) => {
    const value = e.target.value;
    if (value === "priceL") {
      setSortItems("priceL");
    } else if (value === "priceH") {
      setSortItems("priceH");
    } else {
      setSortItems("default");
    }
  };

  return (
    <div className="container">
      <div className="row shopTopBg my-5"></div>
      <div className="row my-5">
        <div className="col-sm-2 col-12 p-3" style={Style.inputBg}>
          <div className="row">
            <h6 className="mb-3">Select price</h6>

            <div className="col-6">
              <input
                disabled
                // onChange={handleChange}
                name="minPrice"
                className="mx-auto d-block"
                style={Style.input}
                type="number"
              />
              <span className="text-secondary text-center d-block">min.</span>
            </div>
            <div className="col-6">
              <input
                disabled
                // onChange={handleChange}
                name="maxPrice"
                className="mx-auto d-block"
                style={Style.input}
                type="number"
              />
              <span className="text-secondary text-center d-block">max.</span>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ul>
                {/* {items.map((item, index) => {
                  return <li key={index}>{item.product_type}</li>;
                })} */}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-10 col-12 pt-3">
          <div className="row">
            <div className="col-sm-6 col-12">
              <h6>Brands</h6>
              <select
                onChange={handleChangeBrand}
                name="selectBrand"
                className="form-select"
                aria-label="Default select example"
              >
                <option></option>
                <option>All</option>
                {brandAndCategory.map((item, index) => {
                  return (
                    <option
                      key={`brand${item.brand + index}`}
                      value={item.brand}
                    >
                      {item.brand}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-sm-6 col-12">
              <h6>Sort by</h6>
              <select
                onChange={handleChangeSort}
                name="sortBy"
                className="form-select"
                aria-label="Default select example"
              >
                <option defaultValue>default</option>
                <option value="priceL">price low to high</option>
                <option value="priceH">price high to low</option>
              </select>
              {/* <span>{settings.sortBy}</span> */}
            </div>
            <div className="col-4"></div>
          </div>
          <div className="row">
            {items.length > 0 ? (
              sortItems === "priceL" ? (
                handleSortByPrice(items.sort((a, b) => a.price - b.price))
              ) : sortItems === "priceH" ? (
                handleSortByPrice(items.sort((a, b) => b.price - a.price))
              ) : (
                handleSortByPrice(items)
              )
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
