import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICE = {
  meat: 2,
  bacon: 1.3,
  salad: 0.7,
  cheese: 0.9,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get("/ingredients")
      .then((res) => {
        console.log(res);
        this.setState({ ingredients: res.data.results[0].ingredient });
      })
      .catch((err) => this.setState({ error: true }));
  }

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
    //alert("Continue to checkout...");
    //this.purchaseCancelHandler();

    const queryParams = [];
    for (const key in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(key) +
          "=" +
          encodeURIComponent(this.state.ingredients[key])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  render() {
    const disabledInfo = { ...this.state.ingredients };

    let burger = this.state.error ? (
      <div>Can't load your burger!</div>
    ) : (
      <Spinner />
    );
    let orderSummary = null;
    if (this.state.ingredients) {
      orderSummary = (
        <OrderSummary
          totalPrice={this.state.totalPrice}
          ingredients={this.state.ingredients}
          cancelled={this.purchaseCancelHandler}
          continued={this.purchaseContinueHandler}
        />
      );
      burger = (
        <>
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
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}
export default withErrorHandler(BurgerBuilder, axios);
