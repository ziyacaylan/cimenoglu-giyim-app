import { Outlet } from "react-router-dom";
import "../../components/CategoryItem/category-item.styles.scss";
import Directory from "../../components/Directory";
// import { getCategories } from "../../store/category/categorySlice";
// import { useDispatch, useSelector } from "react-redux";

function Home() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  //const category = async () => await getCategories();
  //category();
  //const dispatch = useDispatch();

  //const categoriler = useSelector((state) => state.categories);
  //console.log(categoriler);
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
}

export default Home;
