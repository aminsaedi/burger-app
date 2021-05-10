import React from "react";
import NavigationItem from "./navigationItem";
import "./navigationItems.css";
const NavigationItems = (props) => {
  return (
    <ul className="navigationItems">
      <NavigationItem lable="همبرگرتو بساز" active />
      <NavigationItem lable="چیزی که ساختم" />
    </ul>
  );
};

export default NavigationItems;
