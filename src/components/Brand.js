import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ classes, smallBrand }) => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <Link style={linkStyle} to="/" className={`link navbar-brand ${classes}`}>
      Makeup
      <span className={`smallB d-block ${smallBrand}`}>BEAUTY</span>
    </Link>
  );
};

export default Brand;
