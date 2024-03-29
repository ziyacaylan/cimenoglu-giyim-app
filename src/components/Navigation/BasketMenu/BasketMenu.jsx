import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { Button, Divider } from "@mui/material";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BasketMenu = ({
  basketAnchorEl,
  handleBasketMenuClose,
  basketMenuId,
  handleBasketMenuOpen,
}) => {
  const basket = useSelector((state) => state.basket.basket);
  const navigate = useNavigate();
  // console.log(basket);

  const handleCheckout = () => {
    navigate("/checkout", { replace: true });
    handleBasketMenuClose();
  };
  return (
    <>
      {basket.length > 0 && (
        <Menu
          id={basketMenuId}
          anchorEl={basketAnchorEl}
          open={Boolean(basketAnchorEl)}
          onClose={handleBasketMenuClose}
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
          // sx={{ maxWidth: "250px" }}
        >
          {basket.map((product) => (
            <MenuItem key={product.id}>
              <Box
                sx={{
                  maxWidth: 240,
                  display: "flex",
                  // flexWrap: "wrap",
                  justifyontent: "space-between",
                  alignItems: "center",
                }}
              >
                <Avatar alt="product" src={product.imageUrl} variant="square" />

                <Box
                  ml={2}
                  // textAlign="end"
                  sx={{
                    width: "180px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                    flexGrow: 1,
                  }}
                >
                  <Typography component="a" color="primary.main">
                    {product.name}
                  </Typography>
                  <Box>
                    <Typography
                      component="a"
                      color="primary.main"
                      sx={{ fontWeight: "bold" }}
                    >
                      {` ${product.amount} `}
                    </Typography>
                    <Typography
                      component="a"
                      color="primary.main"
                      sx={{ fontWeight: "bold" }}
                    >
                      {` x `}
                    </Typography>
                    <Typography
                      component="a"
                      color="primary.main"
                      sx={{ fontWeight: "bold" }}
                    >
                      {` $${product.price}`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </MenuItem>
          ))}
          <Divider sx={{ borderColor: "primary.main" }} />
          <MenuItem>
            <Button
              variant="contained"
              sx={{ bgColor: "primary.main", width: "100%" }}
              onClick={handleCheckout}
            >
              checkout
            </Button>
          </MenuItem>
        </Menu>
      )}
    </>
  );
};
export default BasketMenu;
