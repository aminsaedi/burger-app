import React from "react";
import "./buildControls.css";
import SoloControl from "./SoloControl";

const BuildControls = ({ ingredients, onIncrement, onDecrement }) => {
  const persianLables = {
    bacon: "ژامبون",
    cheese: "پنیر",
    meat: "گوشت",
    salad: "کاهو و کلم",
  };
  return (
    <div className="buildControlArea">
      {Object.keys(ingredients).map((keyName, keyIndex) => {
        return (
          <SoloControl
            count={ingredients[keyName]}
            key={keyIndex}
            lable={keyName}
            onDecrement={() => onDecrement(keyName)}
            onIncrement={() => onIncrement(keyName)}
            persianLables={persianLables}
          />
        );
      })}
    </div>
  );
};

export default BuildControls;
