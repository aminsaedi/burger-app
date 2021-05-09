import React, { useState, useEffect } from "react";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Burger from "../components/Burger/Burger";
import Checkout from "../components/Burger/Checkout/Checkput";
import TotalPrice from "../components/Burger/TotalPrice/TotalPrice";
import Modal from "../components/UI/Modal/Modal";
const BurgerBuilder = (props) => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  });
  const [showCheckout, setShowCheckout] = useState(false);
  const persianLables = {
    bacon: " ژامبون 🍗",
    cheese: "پنیر 🧈",
    meat: "گوشت 🥩",
    salad: "کاهو و کلم 🥬",
  };
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    total += ingredients.salad * 2000;
    total += ingredients.cheese * 3500;
    total += ingredients.meat * 7500;
    total += ingredients.bacon * 1500;
    setTotalPrice(total);
  }, [ingredients]);
  const handleIncrement = (key) => {
    const cache = { ...ingredients };
    cache[key] += 1;
    setIngredients(cache);
  };
  const handleDecrement = (key) => {
    const cache = { ...ingredients };
    cache[key] -= 1;
    setIngredients(cache);
  };
  return (
    <React.Fragment>
      {showCheckout &&  <Modal>
        <Checkout persianLables={persianLables} ingredients={ingredients} onCancel={() => setShowCheckout(false)} />
      </Modal>}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredients={ingredients}
          onIncrement={(item) => handleIncrement(item)}
          onDecrement={(item) => handleDecrement(item)}
          persianLables={persianLables}
        />
      </div>
      <TotalPrice price={totalPrice} onClick={() => setShowCheckout(true)} />
    </React.Fragment>
  );
};

export default BurgerBuilder;
