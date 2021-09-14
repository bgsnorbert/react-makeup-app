import React from "react";
import Brand from "./Brand";
import FIcon from "./Icons/FIcon";
import IIcon from "./Icons/IIcon";
import TIcon from "./Icons/TIcon";

const Footer = () => {
  const date = new Date().getFullYear();

  const FooterContent = () => {
    return (
      <div className="col-2 my-auto">
        <ul className="mb-0 footerUl d-flex flex-column">
          <li className="fw-bold">Title</li>
          <li>News</li>
          <li>Html</li>
          <li>Subscribe</li>
          <li>maps</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <footer className="text-light pt-5 pb-4">
          <div className="container">
            <div className="row mx-auto">
              <div className="col-2">
                <Brand classes="text-warning text-center d-block " />
              </div>

              <FooterContent footerClasses="flex-column" />
              <FooterContent footerClasses="flex-column" />
              <FooterContent footerClasses="flex-column" />
              <FooterContent footerClasses="flex-column" />

              <div className="col-2 my-auto">
                <ul className="ps-0 mb-0 footerUl d-flex flex-column-reverse ">
                  <li className="p-3 text-warning text-start">
                    <FIcon />
                  </li>
                  <li className="p-3 text-warning">
                    <IIcon />
                  </li>
                  <li className="p-3 text-warning">
                    <TIcon />
                  </li>
                </ul>
              </div>
              <span className="text-center mt-5 text-secondary">
                Copyright &copy; {date}. All rights reserved. Term of Use |
                Privacy Policy
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
