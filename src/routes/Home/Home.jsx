import { Outlet } from "react-router-dom";
import "../../components/CategoryItem/category-item.styles.scss";
import Directory from "../../components/Directory";

import { useSelector } from "react-redux";
import CarouselItem from "../../components/CarouselItem";

function Home() {
  const { categories } = useSelector((state) => state.categories);

  return (
    <div>
      <Outlet />
      <CarouselItem />
      <Directory categories={categories} />
    </div>
  );
}

export default Home;
