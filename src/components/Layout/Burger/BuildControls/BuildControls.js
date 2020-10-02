import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const BuildControls = (props) => {
  const controls = [
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Salad", type: "salad" },
  ];
  return (
    <div className={classes.BuildControls}>
      {controls.map((e) => {
        return <BuildControl label={e.label} key={e.type} />;
      })}
    </div>
  );
};
export default BuildControls;
