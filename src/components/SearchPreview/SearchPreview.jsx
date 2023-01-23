import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";

const SearchPreview = ({ categoryChecked, priceChecked }) => {
  const { products } = useSelector((state) => state.products);
  const { searchText, searchCategories, priceRange } = useSelector(
    (state) => state.search
  );

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()) && product
  );

  if (searchCategories.length > 0 && categoryChecked) {
    const categoriesFilteredProducts = filteredProducts.filter(
      (product) =>
        searchCategories.some(
          (category) => category.name === product.category
        ) && product
    );

    filteredProducts.splice(
      0,
      filteredProducts.length,
      ...categoriesFilteredProducts
    );
  }
  if (priceRange.length > 0 && priceChecked) {
    const priceFilteredProducts = filteredProducts
      .filter((product) => product.price >= priceRange[0])
      .filter((item) => item.price <= priceRange[1]);
    filteredProducts.splice(
      0,
      filteredProducts.length,
      ...priceFilteredProducts
    );
  }
  return (
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
  );
};
export default SearchPreview;
