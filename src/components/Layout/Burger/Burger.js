import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  const ingredientTrasformation = Object.keys(props.ingredients).map(
    (igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={i + igKey} type={igKey} />;
      });
    }
  );
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientTrasformation}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
