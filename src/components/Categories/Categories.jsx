import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import CategoryPreview from "../CategoryPreview";
const Categories = () => {
  const { categories } = useSelector((state) => state.categories);
  return (
    <Box>
      {categories.map((category) => (
        <CategoryPreview category={category.name} key={category.id} />
      ))}
    </Box>
  );
};
export default Categories;
