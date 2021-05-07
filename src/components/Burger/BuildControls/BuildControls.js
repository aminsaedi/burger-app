import React from "react";

const BuildControls = ({ text, onIncrement, onDecrement, maxLimit, count }) => {
  return (
    <div style={{ display: "inline" }}>
      <p>
        {text} : {count}
      </p>
      <button onClick={onIncrement} disabled={count >= maxLimit}>
        +
      </button>
      <button onClick={onDecrement} disabled={count <= 0}>
        -
      </button>
    </div>
  );
};

export default BuildControls;
