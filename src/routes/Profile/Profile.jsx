import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <Container maxWidth="md">
      <Outlet />
    </Container>
  );
};
export default Profile;
