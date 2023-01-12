import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/CategoryPreview";

const Shop = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <Container maxWidth="xl">
      {categories.map((category) => (
        <CategoryPreview category={category.name} key={category.id} />
      ))}
    </Container>
  );
};

export default Shop;
