import { Button, Container } from "@mui/material";
import React from "react";
import { addProduct } from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";

const items = [
  {
    p_id: 1,
    category: "hats",
    name: "Brown Brim",
    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
    price: 25,
  },
  {
    p_id: 2,
    category: "hats",
    name: "Blue Beanie",
    imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
    price: 18,
  },
  {
    p_id: 3,
    category: "hats",
    name: "Brown Cowboy",
    imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
    price: 35,
  },
  {
    p_id: 4,
    category: "hats",
    name: "Grey Brim",
    imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
    price: 25,
  },
  {
    p_id: 5,
    category: "hats",
    name: "Green Beanie",
    imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
    price: 18,
  },
  {
    p_id: 6,
    category: "hats",
    name: "Palm Tree Cap",
    imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
    price: 14,
  },
  {
    p_id: 7,
    category: "hats",
    name: "Red Beanie",
    imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
    price: 18,
  },
  {
    p_id: 8,
    category: "hats",
    name: "Wolf Cap",
    imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
    price: 14,
  },
  {
    p_id: 9,
    category: "hats",
    name: "Blue Snapback",
    imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
    price: 16,
  },
  {
    p_id: 10,
    category: "sneakers",
    name: "Adidas NMD",
    imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
    price: 220,
  },
  {
    p_id: 11,
    category: "sneakers",
    name: "Adidas Yeezy",
    imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
    price: 280,
  },
  {
    p_id: 12,
    category: "sneakers",
    name: "Black Converse",
    imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
    price: 110,
  },
  {
    p_id: 13,
    category: "sneakers",
    name: "Nike White AirForce",
    imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
    price: 160,
  },
  {
    p_id: 14,
    category: "sneakers",
    name: "Nike Red High Tops",
    imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
    price: 160,
  },
  {
    p_id: 15,
    category: "sneakers",
    name: "Nike Brown High Tops",
    imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
    price: 160,
  },
  {
    p_id: 16,
    category: "sneakers",
    name: "Air Jordan Limited",
    imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
    price: 190,
  },
  {
    p_id: 17,
    category: "sneakers",
    name: "Timberlands",
    imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
    price: 200,
  },

  {
    p_id: 18,
    category: "jackets",
    name: "Black Jean Shearling",
    imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
    price: 125,
  },
  {
    p_id: 19,
    category: "jackets",
    name: "Blue Jean Jacket",
    imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
    price: 90,
  },
  {
    p_id: 20,
    category: "jackets",
    name: "Grey Jean Jacket",
    imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
    price: 90,
  },
  {
    p_id: 21,
    category: "jackets",
    name: "Brown Shearling",
    imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
    price: 165,
  },
  {
    p_id: 22,
    category: "jackets",
    name: "Tan Trench",
    imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
    price: 185,
  },

  {
    p_id: 23,
    category: "womens",
    name: "Blue Tanktop",
    imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
    price: 25,
  },
  {
    p_id: 24,
    category: "womens",
    name: "Floral Blouse",
    imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
    price: 20,
  },
  {
    p_id: 25,
    category: "womens",
    name: "Floral Dress",
    imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
    price: 80,
  },
  {
    p_id: 26,
    category: "womens",
    name: "Red Dots Dress",
    imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
    price: 80,
  },
  {
    p_id: 27,
    category: "womens",
    name: "Striped Sweater",
    imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
    price: 45,
  },
  {
    p_id: 28,
    category: "womens",
    name: "Yellow Track Suit",
    imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
    price: 135,
  },
  {
    p_id: 29,
    category: "womens",
    name: "White Blouse",
    imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
    price: 20,
  },

  {
    p_id: 30,
    category: "mens",
    name: "Camo Down Vest",
    imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
    price: 325,
  },
  {
    p_id: 31,
    category: "mens",
    name: "Floral T-shirt",
    imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
    price: 20,
  },
  {
    p_id: 32,
    category: "mens",
    name: "Black & White Longsleeve",
    imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
    price: 25,
  },
  {
    p_id: 33,
    category: "mens",
    name: "Pink T-shirt",
    imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
    price: 25,
  },
  {
    p_id: 34,
    category: "mens",
    name: "Jean Long Sleeve",
    imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
    price: 40,
  },
  {
    p_id: 35,
    category: "mens",
    name: "Burgundy T-shirt",
    imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
    price: 25,
  },
];
const categories = [
  { c_id: 1, name: "hats" },
  { c_id: 2, name: "sneakers" },
  { c_id: 3, name: "jackets" },
  { c_id: 4, name: "womens" },
  { c_id: 5, name: "mens" },
];
const AddProduct = () => {
  const user = useSelector((state) => state.auth.user);
  const addHandle = () => {
    const products = items.map((item) => ({
      ...item,
      uid: user.uid,
      createAt: new Date(),
    }));
    products.map((product) => addProduct(product));
  };

  const addCategoriesHandle = () => {
    const categoriler = categories.map((category) => ({
      ...category,
      uid: user.uid,
      createAt: new Date(),
    }));
    categoriler.map((item) => addProduct(item));
  };
  return (
    <Container>
      <Button onClick={addCategoriesHandle}>Ekle</Button>
    </Container>
  );
};
export default AddProduct;
