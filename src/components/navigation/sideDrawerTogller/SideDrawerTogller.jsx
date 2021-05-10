import React from "react";

import './sideDrawerTogller.css'

const SideDrawerTogller = ({ onClick, className }) => {
  return (
    <div onClick={onClick} className={"DrawerToggle " + className}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SideDrawerTogller;
