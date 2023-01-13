import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/CategoryPreview";

const Shop = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <Box>
      {categories.map((category) => (
        <CategoryPreview category={category.name} key={category.id} />
      ))}
    </Box>
  );
};

export default Shop;
