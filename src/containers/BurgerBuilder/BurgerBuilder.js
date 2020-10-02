import React, { Component } from "react";
import Burger from "../../components/Layout/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 1,
      bacon: 2,
      cheese: 2,
      salad: 2,
    },
    ingredientPrices: {
      meat: 20,
      bacon: 18,
      cheese: 5,
      salad: 2,
    },
  };

  changeIgHandler = (e, type) => {
    let ig = { ...this.state.ingredients };
    ig[type] = e.target.value;

    this.setState({ ingredients: ig });
  };
  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <div>
          Meat:{" "}
          <input
            type="number"
            min="0"
            value={this.state.ingredients.meat}
            onChange={(e) => this.changeIgHandler(e, "meat")}
          />
          Bacon:{" "}
          <input
            type="number"
            min="0"
            value={this.state.ingredients.bacon}
            onChange={(e) => this.changeIgHandler(e, "bacon")}
          />
        </div>
      </>
    );
  }
}
export default BurgerBuilder;
