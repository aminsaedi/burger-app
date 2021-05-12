import React, { useState, useEffect } from "react";
import axiosOrders from "../axiosOrders";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Burger from "../components/Burger/Burger";
import Checkout from "../components/Burger/Checkout/Checkput";
import Modal from "../components/UI/Modal/Modal";
import TotalPrice from "../components/Burger/TotalPrice/TotalPrice";
import Spinner from "../components/UI/Spinner/Spinner";
import axios from "axios";

const BurgerBuilder = (props) => {
  const [ingredients, setIngredients] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const persianLables = {
    bacon: " ژامبون 🍗",
    cheese: "پنیر 🧈",
    meat: "گوشت 🥩",
    salad: "کاهو و کلم 🥬",
  };
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const setIngredientsFromServer = async () => {
    try {
      const result = await axios.get(
        "https://amin-burger-builder-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json"
      );
      setIngredients(result.data);
    } catch (error) {
      alert("Error on connecting to server.");
    }
  };
  useEffect(() => {
    setIngredientsFromServer();
  }, []);
  useEffect(() => {
    if(!ingredients) return
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
  const handleOrder = async () => {
    const order = {
      ingredients,
      totalPrice,
      customer: {
        name: "amin saedi",
        mobile: "09352233659",
        address: {
          street: "bahonar",
          allay: "alaghemandan",
          code: 16,
        },
      },
    };
    setLoading(true);
    try {
      await axiosOrders.post("/orders.json", order);
      alert("Done!");
    } catch (error) {
      alert("Error.");
    }
    setLoading(false);
    setShowCheckout(false);
  };
  return (
    <React.Fragment>
      <Modal visible={showCheckout} onDismiss={() => setShowCheckout(false)}>
        {loading ? (
          <Spinner visible={loading} />
        ) : (
          ingredients && <Checkout
            persianLables={persianLables}
            ingredients={ingredients}
            onCancel={() => setShowCheckout(false)}
            onOrder={handleOrder}
          />
        )}
      </Modal>
      {ingredients && <Burger ingredients={ingredients} />}
      {ingredients && <BuildControls
        ingredients={ingredients}
        onIncrement={(item) => handleIncrement(item)}
        onDecrement={(item) => handleDecrement(item)}
        persianLables={persianLables}
      />}

      <TotalPrice price={totalPrice} onClick={() => setShowCheckout(true)} />
    </React.Fragment>
  );
};

export default BurgerBuilder;
