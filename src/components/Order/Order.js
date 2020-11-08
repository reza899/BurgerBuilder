import React from "react";
import classes from "./Order.module.css";

const Order = ({ ingredients, price }) => {
  const ings = [];

  // for (let iterator of ingredients.entries()) {
  //   ings[iterator[0]] = iterator[1];
  // }

  for (let igName in ingredients) {
    ings.push({
      name: igName,
      amout: ingredients[igName],
    });
  }
  const ingsOutput = ings.map((ig) => {
    return (
      <span className={classes.Span} key={ig.name}>
        {ig.name} : {ig.amout}
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <h4>Ingredients: </h4>
      {ingsOutput}
      {console.log(ings)}
      <hr />
      <h5>Price: USD {Number.parseFloat(price).toFixed(2)}</h5>
    </div>
  );
};

export default Order;
