import { Outlet } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import Directory from "../../components/Directory";
import CarouselItem from "../../components/CarouselItem";
import CarouselCards from "../../components/CarouselCards/CarouselCards";
import { useSelector } from "react-redux";

function Home() {
  const { categories } = useSelector((state) => state.categories);

  return (
    <div>
      <Outlet />
      <CarouselItem />
      <Directory categories={categories} />
      <CarouselCards />
    </div>
  );
}

export default Home;
