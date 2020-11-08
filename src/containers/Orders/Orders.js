import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: false,
  };
  componentDidMount() {
    axios
      .get("/order.json")
      .then((res) => {
        console.log(res.data);
        let ods = [];
        for (const key in res.data) {
          ods.push({ ...res.data[key], id: key });
        }
        this.setState({ orders: ods, loading: false });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });

    console.log(this.state.orders);
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => {
          console.log(order);

          return (
            <Order
              ingredients={order.ingredients}
              price={order.price}
              key={order.id}
            />
          );
        })}
      </div>
    );
  }
}
export default withErrorHandler(Orders, axios);
