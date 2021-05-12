import React from "react";
import Modal from "../Modal/Modal";
import "./spinner.css";

const Spinner = ({ visible = true }) => {
  if (!visible) return null;
  return <div className="spinner"></div>;
};

export default Spinner;
