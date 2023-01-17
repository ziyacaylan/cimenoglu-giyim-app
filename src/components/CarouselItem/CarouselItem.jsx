import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

const CarouselItem = () => {
  const { categories } = useSelector((state) => state.categories);
  console.log(categories);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "350px",
        margin: "0 auto",
      }}
    >
      <Carousel
        className="img-items"
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        autoPlay
      >
        {categories.map((category) => (
          <div key={category.id} width="200px">
            <img
              src={category.imageUrl}
              alt={category.name}
              // width="100px"
              height={250}
            />
            <p className="legend">{category.name}</p>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default CarouselItem;
