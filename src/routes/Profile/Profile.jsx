import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import ProfileUpdate from "../../components/ProfileUpdate/ProfileUpdate";

const Profile = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default Profile;
