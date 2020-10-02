import React, { Component } from "react";
import Burger from "../../components/Layout/Burger/Burger";
import BurgerControls from "../../components/Layout/Burger/BuildControls/BuildControls";
import Modal from "../../components/Layout/UI/Modal/Modal";
import OrderSummary from "../../components/Layout/Burger/OrderSummary/OrderSummary";

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
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((e) => {
        return ingredients[e];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updateIngredients = { ...this.state.ingredients };
    updateIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const newPrice = this.state.totalPrice + priceAddition;
    this.setState({ ingredients: updateIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updateIngredients);
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
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandle = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: !this.state.purchasing });
  };

  purchaseContinueHandler = () => {
    alert("Continue to checkout...");
    this.purchaseCancelHandler();
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            totalPrice={this.state.totalPrice}
            ingredients={this.state.ingredients}
            cancelled={this.purchaseCancelHandler}
            continued={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          added={this.addIngredientHandler}
          removed={this.removeIngredientHandler}
          disabled={disabledInfo}
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandle}
        />
      </>
    );
  }
}
export default BurgerBuilder;
