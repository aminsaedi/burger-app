import React from "react";
import "./soloControl.css";

const SoloControl = ({
  lable,
  onIncrement,
  onDecrement,
  count,
  persianLables,
}) => {
  return (
    <div className="soloControl">
      <p className="soloControl__lable">
        {persianLables[lable]} : {count.toString().toPersianDigits()}
      </p>
      <button className="soloControl__button" onClick={onIncrement}>
        🤤بیشتر
      </button>
      <button
        className="soloControl__button"
        onClick={onDecrement}
        disabled={count <= 0}
      >
        🤨کمتر
      </button>
    </div>
  );
};

export default SoloControl;
