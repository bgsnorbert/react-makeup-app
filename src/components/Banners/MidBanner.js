import React from "react";
import { Link } from "react-router-dom";

const MidBanner = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-md-4 col-12">
          <div className="smallBg">
            <h3 className="p-4">Natural and Bio, React, API, Object, Array</h3>
            <Link
              to={"/about"}
              className="mx-4 btn btn-warning rounded-pill px-4"
            >
              See more
            </Link>
          </div>
        </div>
        <div className="col-md-8 col-12">
          <div className="largeBg">
            <div className="col-md-4 col-12">
              <h3 className="p-4">
                Natural and Bio, React, API, Object, Array
              </h3>
              <Link
                to={"/about"}
                className="mx-4 btn btn-warning rounded-pill px-4"
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
