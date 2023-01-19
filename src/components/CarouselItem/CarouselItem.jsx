import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

// import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";

const CarouselItem = () => {
  //const { categories } = useSelector((state) => state.categories);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  //console.log(categories);
  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{
          width: "100%",
          height: "300px",
        }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontFamily: "Saira Extra Condensed",
                fontWeight: "bold",
                color: "bannerTextColor",
              }}
            >
              BIG SALE
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                fontFamily: "Saira Extra Condensed",
                fontSize: 24,
                color: "bannerTextColor",
              }}
            >
              Upto 50% OFF
            </Typography>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="https://images.pexels.com/photos/10834823/pexels-photo-10834823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontFamily: "Saira Extra Condensed",
                fontWeight: "bold",
                color: "bannerTextColor",
              }}
              style={{ fontFamily: "Saira Extra Condensed" }}
            >
              LET'S CREATE YOUR OWN STYLE
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                fontFamily: "Saira Extra Condensed",
                fontSize: 24,
                color: "bannerTextColor",
              }}
              style={{ fontFamily: "Saira Extra Condensed" }}
            >
              Women's Collection
            </Typography>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            // src="https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=1600"
            src="https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="Third slide"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontFamily: "Saira Extra Condensed",
                fontWeight: "bold",
                color: "bannerTextColor",
              }}
              style={{ fontFamily: "Saira Extra Condensed" }}
            >
              NEW SNEAKERS
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                fontFamily: "Saira Extra Condensed",
                fontSize: 24,
                color: "bannerTextColor",
              }}
              style={{ fontFamily: "Saira Extra Condensed" }}
            >
              Save up to 50%
            </Typography>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="https://images.pexels.com/photos/5699102/pexels-photo-5699102.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Third slide"
            style={{ width: "100%", height: "300px", objectFit: "cover" }}
          />

          <Carousel.Caption>
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontFamily: "Saira Extra Condensed",
                fontWeight: "bold",
                color: "bannerTextColor",
              }}
              style={{ fontFamily: "Saira Extra Condensed" }}
            >
              NEW SEASON HATS
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{
                fontFamily: "Saira Extra Condensed",
                fontSize: 24,
                color: "bannerTextColor",
              }}
              style={{ fontFamily: "Saira Extra Condensed" }}
            >
              Save up to 60%
            </Typography>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselItem;
