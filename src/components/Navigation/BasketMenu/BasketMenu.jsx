import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";

const BasketMenu = ({
  basketAnchorEl,
  handleBasketMenuClose,
  basketMenuId,
  handleBasketMenuOpen,
}) => {
  return (
    <>
      <Menu
        id={basketMenuId}
        anchorEl={basketAnchorEl}
        open={Boolean(basketAnchorEl)}
        onClose={handleBasketMenuClose}
        // MenuListProps={{
        //   "aria-labelledby": "primary-basket-menu",
        // }}
        keepMounted
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        TransitionComponent={Fade}
      >
        <MenuItem>Ürün 1</MenuItem>
        <MenuItem>Ürün 2</MenuItem>
        <MenuItem>Ürün 3</MenuItem>
        <MenuItem>Ürün 4</MenuItem>
        <MenuItem>Ürün 5</MenuItem>
        <MenuItem>
          <Button>Shop Now</Button>
        </MenuItem>
      </Menu>
    </>
  );
};
export default BasketMenu;
