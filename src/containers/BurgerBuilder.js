import React, { useState } from "react";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Burger from "../components/Burger/Burger";
const BurgerBuilder = (props) => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  });
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
      <Burger ingredients={ingredients} />
      <div style={{ display: "flex", flexDirection: "row", justifyContent:"center" }}>
        <BuildControls
          ingredients={ingredients}
          onIncrement={(item) => handleIncrement(item)}
          onDecrement={(item) => handleDecrement(item)}
        />
        
      </div>
    </React.Fragment>
  );
};

export default BurgerBuilder;
