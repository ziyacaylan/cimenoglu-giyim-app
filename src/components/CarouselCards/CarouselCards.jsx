import React from "react";
import { Carousel, Stack } from "react-bootstrap";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import CardItem from "./Card";

const CarouselCards = () => {
  const reviews = [
    { _id: 1, text: "abc" },
    { _id: 2, text: "def" },
    { _id: 3, text: "ghi" },
    { _id: 4, text: "jkl" },
  ];
  return (
    <div>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontFamily: "Saira Extra Condensed",
          fontWeight: "normal",
          color: "bannerTextColor",
          marginBottom: "5px",
        }}
      >
        FEATURED{" "}
        <Typography
          component="span"
          sx={{
            fontSize: "32px",
            fontFamily: "Saira Extra Condensed",
            color: "bannerTextColor",
            fontWeight: "bold",
          }}
        >
          PRODUCTS
        </Typography>
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          width: "150px",
          borderBottom: "5px solid",
          borderColor: "bannerTextColor",
          margin: "15px auto",
        }}
      ></Box>

      <div className="bg-dark bg-opacity-25 container-fluid">
        <Carousel style={{ height: 500, margin: "20px" }}>
          {React.Children.toArray(
            reviews.map((review, index) => (
              <Carousel.Item style={{ height: 500 }}>
                <Stack
                  direction="horizontal"
                  className="h-100 justify-content-center align-items-center"
                  gap={3}
                >
                  <CardItem />
                  <CardItem />
                  <CardItem />
                  <CardItem />
                </Stack>
              </Carousel.Item>
            ))
          )}
        </Carousel>
      </div>
    </div>
  );
};
export default CarouselCards;
