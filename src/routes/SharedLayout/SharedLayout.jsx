import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation";

const SharedLayout = () => {
  return (
    <Fragment>
      <Navigation />
      <Outlet />
    </Fragment>
  );
};
export default SharedLayout;
