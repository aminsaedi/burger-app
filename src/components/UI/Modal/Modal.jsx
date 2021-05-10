import React from "react";
import BackDrop from "../Backdrop/Backdrop";
import "./modal.css";

const Modal = ({ visible,children,onDismiss }) => {
  return (
    <React.Fragment>
      <BackDrop visible={visible} onClick={onDismiss} />
      <div
        className="Modal"
        style={{
          transform: visible ? "translateY(0)" : "translateY(-100vh)",
          opacity: visible ? 1 : 0,
        }}
      >
        {children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
