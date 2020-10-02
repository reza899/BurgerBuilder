import React, { Component } from "react";
import Burger from "../../components/Layout/Burger/Burger";
import BurgerControls from "../../components/Layout/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
  meat: 2,
  bacon: 1.3,
  salad: 0.7,
  cheese: 0.9,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0,
    },
    totalPrice: 4,
  };
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const newPrice = this.state.totalPrice + priceAddition;
    this.setState({ ingredients: newIngredients, totalPrice: newPrice });
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceDecution = INGREDIENT_PRICE[type];
    const newPrice = this.state.totalPrice - priceDecution;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <>
        <Burger ingredients={this.state.ingredients} />

        <BurgerControls
          added={this.addIngredientHandler}
          removed={this.removeIngredientHandler}
          disabled={disabledInfo}
          totalPrice={this.state.totalPrice}
        />
      </>
    );
  }
}
export default BurgerBuilder;
