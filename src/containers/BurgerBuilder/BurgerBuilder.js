import React, { Component } from "react";
import Burger from "../../components/Layout/Burger/Burger";
import BurgerControls from "../../components/Layout/Burger/BuildControls/BuildControls";
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      bacon: 0,
      cheese: 0,
      salad: 0,
    },
    totalPrice: 4,
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls />
      </>
    );
  }
}
export default BurgerBuilder;
