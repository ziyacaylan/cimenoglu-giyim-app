import { Card, Box, Button } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./ProductCard.styles.scss";
import { addProduct } from "../../store/basket/basketSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ filteredProducts }) => {
  const dispatch = useDispatch();

  const handleClick = (product) => {
    //console.log(product);
    dispatch(addProduct({ ...product }));
    //dispatch(increase(product.id));
  };

  return (
    <>
      {filteredProducts.map((product) => (
        <Box key={product.id}>
          <Card
            className="collection-item"
            sx={{
              maxWidth: 300,
              minWidth: 250,
              margin: "1rem",
              zIndex: "1",
              ":hover": {
                boxShadow: 20,
              },
            }}
            style={{ position: "relative", width: "100%" }}
          >
            <CardActionArea>
              <Box>
                <CardMedia
                  component="img"
                  height="300"
                  sx={{ width: "300px" }}
                  image={product.imageUrl}
                  alt="green iguana"
                />
              </Box>
              <Button
                className="custom-button"
                component={Link}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "primary.main",
                }}
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                onClick={() => handleClick(product)}
              >
                Add to card
              </Button>
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
        </Box>
      ))}
    </>
  );
};
export default ProductCard;
