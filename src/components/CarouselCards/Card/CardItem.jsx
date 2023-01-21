import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import { Box } from "@mui/material";

import { addProduct } from "../../../store/basket/basketSlice";

import { useDispatch } from "react-redux";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    //console.log(product);
    // dispatch(addProduct({ ...product }));
    //dispatch(increase(product.id));
  };
  return (
    <Card sx={{ minWidth: "250px", maxWidth: "300px" }}>
      <CardMedia
        component="img"
        height="194"
        image={`${product.imageUrl}`}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary" textAlign={"center"}>
          {product.name}
        </Typography>
        {/* stars */}
        <Box
          sx={{
            display: "flex",
            // flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 10px",
          }}
        >
          <Avatar
            sx={{
              color: "bannerTextColor",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <StarIcon />
          </Avatar>
          <Avatar
            sx={{
              color: "bannerTextColor",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <StarIcon />
          </Avatar>
          <Avatar
            sx={{
              color: "bannerTextColor",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <StarIcon />
          </Avatar>
          <Avatar
            sx={{
              color: "bannerTextColor",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <StarHalfIcon />
          </Avatar>
          <Avatar
            sx={{
              color: "bannerTextColor",
              backgroundColor: "transparent",
              boxShadow: "none",
            }}
          >
            <StarOutlineIcon />
          </Avatar>
        </Box>
        {/* price */}
        <Typography variant="h6" color="text.secondary" textAlign={"center"}>
          {`$${product.price}`}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "15px auto",
        }}
      >
        <Button
          size="small"
          variant="contained"
          sx={{ borderRadius: "15px" }}
          startIcon={<ShoppingCartIcon />}
          // onClick={() => handleClick(product)}
        >
          add to card
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
