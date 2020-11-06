import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
// import { Redirect } from "react-router-dom";

class Checkout extends Component {
  state = {
    ingredients: {
      meat: 1,
      bacon: 1,
      salad: 1,
      cheese: 1,
    },
    isAct: false,
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (const param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients });
  }
  // componentDidMount() {
  //   console.log(this.props);
  //   const {result:{salad,meat,cheese}} = QueryString.parse(this.props.location.search);

  //   this.setState({
  //     ingredients: result,
  //   });
  //   this.setState({ isAct: true });
  //   console.log(
  //     this.state.ingredients,
  //     this.state.isAct,
  //     ingr,
  //     QueryString.parse(this.props.location.search)
  //   );
  // }

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
