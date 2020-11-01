import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
// import { Redirect } from "react-router-dom";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  };

  checkoutContinued = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  checkoutCanelled = () => {
    //this.props.history.push("/");
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCanelled={this.checkoutCanelled}
          checkoutContinued={this.checkoutContinued}
        />
      </div>
    );
  }
}
export default Checkout;
