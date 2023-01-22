import CategoryItem from "../CategoryItem";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useSelector } from "react-redux";

import "./directory.styles.scss";

const Directory = ({ categories }) => {
  //console.log(categories);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            textAlign: "center",
            fontFamily: "Saira Extra Condensed",
            mb: 0,
            mt: 2,
          }}
        >
          Cimenoglu Wear
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: "Saira Extra Condensed",
            mt: 0,
            mb: 2,
            px: 1,
            backgroundColor: "divider",
            color: "primary.main",
            display: "inline-block",
          }}
        >
          Store
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </Box>
    </>
  );
};

export default Directory;
