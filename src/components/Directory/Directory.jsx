import CategoryItem from "../CategoryItem";
import { Container } from "@mui/system";

import "./directory.styles.scss";

const Directory = ({ categories }) => {
  //console.log(categories);
  return (
    <Container
      maxWidth="xl"
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
    </Container>
  );
};

export default Directory;
