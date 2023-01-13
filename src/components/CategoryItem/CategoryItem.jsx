import React from "react";
import "./category-item.styles.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentCategory } from "../../store/category/categorySlice";

const Category = ({ category }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { imageUrl, name } = category;

  const clickHandle = () => {
    dispatch(setCurrentCategory(name));
    navigate(`/shop/${name}`, { replace: true });
  };

  return (
    <div className="category-container" onClick={clickHandle}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-content-container">
        <h2>{name}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default Category;
