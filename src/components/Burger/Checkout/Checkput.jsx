import React from "react";
import Num2persian from "num2persian";
import "./checkout.css";

const Checkout = ({ ingredients, persianLables, onCancel,onOrder }) => {
  return (
    <div className="checkout">
      <h1 className="checkout__header">برا ی برگر خفن آماده ای؟</h1>
      <h2>اینا قراره تو برگرت باشه :))</h2>
      <ul className="checkout__list">
        {Object.keys(ingredients).map((keyName, keyIndex) => {
          let text = Num2persian(ingredients[keyName]);
          if (ingredients[keyName] === 1) text = 'ی دونه';
          else if (ingredients[keyName] > 1) text += " تا"
          return (
            <li key={keyIndex}>
              {ingredients[keyName] > 0
                ? text
                : "بدون"}{" "}
              {persianLables[keyName]}
            </li>
          );
        })}
      </ul>
      <button className="checkout__button checkout__button--cancel" onClick={onCancel} >
        😬 میخوام تغیرش بدم
      </button>
      <button className="checkout__button" onClick={onOrder} >🥲 همین عالیه اصن</button>
    </div>
  );
};

export default Checkout;
