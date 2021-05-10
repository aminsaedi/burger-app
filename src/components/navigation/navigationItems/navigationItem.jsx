import React from "react";
import "./navigationItems.css";

const NavigationItem = ({ lable = "Empty", link = "/", active }) => {
  return (
    <li className="navigationItem">
      <a
        className={active ? "navigationItem__link active" : "navigationItem__link"}
        href={link}
      >
        {lable}
      </a>
    </li>
  );
};

export default NavigationItem;
