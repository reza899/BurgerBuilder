import React from "react";
import BurgerLogo from "../../assets/images/burger-logo.jpg";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={BurgerLogo} alt="MyBurger" style={{ height: props.height }} />
    </div>
  );
};

export default Logo;
