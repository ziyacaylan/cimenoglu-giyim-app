import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCategory } from "../../store/category/categorySlice";

const CategoryPreview = ({ category }) => {
  const { products } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  const clickHandle = () => {
    dispatch(setCurrentCategory(category));
    navigate(`/shop/${category}`, { replace: true });
  };
  return (
    <>
      <Box mb={5}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontFamily: "Saira Extra Condensed",
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={clickHandle}
        >
          {category}
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
