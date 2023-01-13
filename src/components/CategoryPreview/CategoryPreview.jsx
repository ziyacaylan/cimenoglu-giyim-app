import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";

const CategoryPreview = ({ category }) => {
  const { products } = useSelector((state) => state.products);
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <>
      <Box mb={5}>
        <Typography
          variant="h2"
          component="h2"
          sx={{ fontFamily: "Saira Extra Condensed", textAlign: "center" }}
        >
          {category.toUpperCase()}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <ProductCard filteredProducts={filteredProducts} />
        </Box>
      </Box>
    </>
  );
};
export default CategoryPreview;
