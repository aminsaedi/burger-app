import React from "react";

import logoImage from "../../assets/images/logo.png";
import "./logo.css";

const Logo = ({ height }) => {
  return (
    <div className="logoContainer" style={{ height }}>
      <img
        className="logoContainer___logoImage"
        src={logoImage}
        alt="burger builder logo"
      />
    </div>
  );
};

export default Logo;
