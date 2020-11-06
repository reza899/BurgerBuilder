import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
  };
  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (const param of query.entries()) {
      if (param[0] === "price") {
        this.setState({ price: param[1] });
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients });
  }

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
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.price}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}
export default Checkout;
