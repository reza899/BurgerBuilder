import React from "react";
import BurgerLogo from "../../assets/images/burger-logo.jpg";
import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={BurgerLogo} alt="MyBurger" />
    </div>
  );
};

export default Logo;
