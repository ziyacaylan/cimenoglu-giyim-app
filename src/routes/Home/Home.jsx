import { Outlet } from "react-router-dom";
import "../../components/CategoryItem/category-item.styles.scss";
import Directory from "../../components/Directory";

import { useSelector } from "react-redux";

function Home() {
  const { categories } = useSelector((state) => state.categories);

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
}

export default Home;
