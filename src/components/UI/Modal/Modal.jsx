import React from "react";
import "./modal.css";

const Modal = ({ visible,children }) => {
  return (
    <div
      className="Modal"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-100vh)",
        opacity: visible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
};

export default Modal;
