import React from "react";

const OrderSummary = (props) => {
  const loIngredient = Object.keys(props.ingredients).map((e) => {
    return (
      <li key={e}>{`${e.charAt(0).toUpperCase() + e.slice(1)} : ${
        props.ingredients[e]
      }`}</li>
    );
  });
  return (
    <>
      <h3>Order Summary</h3>
      <p>Your order is consiste of these ingridentes:</p>
      <ul>{loIngredient}</ul>
      <p>Total price is: {props.totalPrice.toFixed(2)}</p>
    </>
  );
};

export default OrderSummary;
