import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const BuildControls = (props) => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" },
  ];
  return (
    <div className={classes.BuildControls}>
      <h3>Total Price: {props.totalPrice.toFixed(2)}</h3>
      {controls.map((e) => {
        return (
          <BuildControl
            label={e.label}
            key={e.type}
            added={() => props.added(e.type)}
            removed={() => props.removed(e.type)}
            disabled={props.disabled[e.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
      ;
    </div>
  );
};
export default BuildControls;
