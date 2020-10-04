import React from "react";
import Button from "../../UI/Button/Button";

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
      <div>
        <Button clicked={props.cancelled} btnType="Danger">
          Cancel
        </Button>
        <Button clicked={props.continued} btnType="Success">
          Continue
        </Button>
      </div>
    </>
  );
};

export default OrderSummary;
