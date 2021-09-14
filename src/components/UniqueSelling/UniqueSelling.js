import React from "react";
import { Link } from "react-router-dom";

const UniqueSelling = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-12">
          <div className="uniqueBg">
            <div className="row">
              <div className="col-sm-4 col-12">
                <h3 className="p-4">
                  Natural and Bio, React, API, Object, Array
                </h3>
              </div>
              <div className="col-sm-8 col-12 text-sm-end">
                <Link
                  to={"/about"}
                  className="mx-4 btn btn-warning rounded-pill px-4 m-4"
                >
                  See more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueSelling;
