import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let ingredientTrasformation = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient type={igKey} key={igKey + i} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (ingredientTrasformation.length === 0) {
    ingredientTrasformation = <p>Please select some ingredients...</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientTrasformation}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
