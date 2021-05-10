import React from "react";

import './backdrop.css'

const BackDrop = ({ visible,onClick }) => {
  return visible ? <div className="backdrop" onClick={onClick} ></div> : null;
};

export default BackDrop;
