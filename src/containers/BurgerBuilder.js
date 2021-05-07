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
      <div style={{ display: "flex", flexDirection: "row" }}>
        <BuildControls
          text="سالاد کاهو و کلم"
          onIncrement={() => handleIncrement("salad")}
          onDecrement={() => handleDecrement("salad")}
          count={ingredients.salad}
          maxLimit={2}
        />
        <BuildControls
          text="پنیر"
          onIncrement={() => handleIncrement("cheese")}
          onDecrement={() => handleDecrement("cheese")}
          count={ingredients.cheese}
          maxLimit={3}
        />
        <BuildControls
          text="گوشت"
          onIncrement={() => handleIncrement("meat")}
          onDecrement={() => handleDecrement("meat")}
          count={ingredients.meat}
          maxLimit={2}
        />
        <BuildControls
          text="ژامبون"
          onIncrement={() => handleIncrement("bacon")}
          onDecrement={() => handleDecrement("bacon")}
          count={ingredients.bacon}
          maxLimit={1}
        />
      </div>
    </React.Fragment>
  );
};

export default BurgerBuilder;
