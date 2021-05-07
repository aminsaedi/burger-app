import React from "react";

import BurgerIngeredient from "./BurgerIngredient/BurgerIngredient";
import "./burger.css";

const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map((igKey) => {
      return [...Array(ingredients[igKey])].map((_, index) => {
        return <BurgerIngeredient key={igKey + index} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>ی چیزی به برگرت اضافه کن</p>;
  }
  return (
    <div className="Burger">
      <BurgerIngeredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngeredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
