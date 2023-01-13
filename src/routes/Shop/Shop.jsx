import { useSelector } from "react-redux";
import CategoryPreview from "../../components/CategoryPreview";

const Shop = () => {
  const { categories } = useSelector((state) => state.categories);

  return (
    <>
      {categories.map((category) => (
        <CategoryPreview category={category.name} key={category.id} />
      ))}
    </>
  );
};

export default Shop;
