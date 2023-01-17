import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../../components/Navigation";
import Container from "@mui/material/Container";
import Footer from "../../../components/Footer/Footer";

const SharedLayout = () => {
  return (
    <Fragment>
      <Navigation />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
      <Footer />
    </Fragment>
  );
};
export default SharedLayout;
