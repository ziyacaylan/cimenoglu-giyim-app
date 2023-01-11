import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../../components/Navigation";
import Container from "@mui/material/Container";

const SharedLayout = () => {
  return (
    <Fragment>
      <Navigation />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
    </Fragment>
  );
};
export default SharedLayout;
