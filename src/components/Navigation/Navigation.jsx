import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./navigation.styles.scss";

import DarkModeSwitch from "../../components/DarkModeWsitch";
import ShoppingBasket from "../../components/Basket";

const Navigation = ({ darkMode, checked }) => {
  return (
    <div className="navigation">
      <Link to="/">
        <CrwnLogo className="logo" />
      </Link>

      <div className="nav-links-container">
        <Stack spacing={2} direction="row">
          <Link className="nav-link" to="/shop">
            <Button variant="outlined">SHOP</Button>
          </Link>
          <Link className="nav-link" to="/sign-in">
            <Button variant="outlined">SIGN IN</Button>
          </Link>
          <DarkModeSwitch darkMode={darkMode} checked={checked} />
          <ShoppingBasket />
        </Stack>
      </div>
    </div>
  );
};
export default Navigation;
