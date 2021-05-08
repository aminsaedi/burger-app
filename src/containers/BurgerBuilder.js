import React, { useState, useEffect } from "react";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Burger from "../components/Burger/Burger";
import TotalPrice from "../components/Burger/TotalPrice/TotalPrice";
const BurgerBuilder = (props) => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  });
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
      <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}} >
        <Burger ingredients={ingredients} />
        <BuildControls
          ingredients={ingredients}
          onIncrement={(item) => handleIncrement(item)}
          onDecrement={(item) => handleDecrement(item)}
        />
      </div>
      <TotalPrice price={totalPrice} />
    </React.Fragment>
  );
};

export default BurgerBuilder;
