import CategoryItem from "../CategoryItem";
import { Container } from "@mui/system";

import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </Container>
  );
};

export default Directory;
