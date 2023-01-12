import { Card, Box, Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";

const ProductCard = ({ filteredProducts }) => {
  return (
    <>
      {filteredProducts.map((product) => (
        <Card
          key={product.id}
          sx={{
            maxWidth: 300,
            minWidth: 250,
            margin: "1rem",
            ":hover": {
              boxShadow: 20, // theme.shadows[20]
            },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              sx={{ width: "250px" }}
              image={product.imageUrl}
              alt="green iguana"
            />

            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "spaceBetween",
                }}
              >
                <Typography gutterBottom variant="caption" component="span">
                  {product.name}
                </Typography>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Typography variant="h6" component="div">
                  {`${product.price}$`}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
};
export default ProductCard;
