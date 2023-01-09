import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./navigation.styles.scss";

import DarkModeSwitch from "../../components/DarkModeWsitch";
import ShoppingBasket from "../../components/Basket";

import { useSelector } from "react-redux";
import { logout } from "../../store/auth/authSlice.js";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import ProfileMenuButton from "../ProfileMenuButton/ProfileMenuButton";

const Navigation = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  console.log("navigation yazdırıyor...", user);
  //console.log("user ı aldım geldim", user);
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
          {user ? (
            <ProfileMenuButton />
          ) : (
            <Link className="nav-link" to="/sign-in">
              <Button
                variant="outlined"
                onClick={() => (user ? dispatch(logout()) : "")}
              >
                SIGN IN
              </Button>
            </Link>
          )}

          <DarkModeSwitch />
          <ShoppingBasket />
        </Stack>
      </div>
    </div>
  );
};
export default Navigation;
