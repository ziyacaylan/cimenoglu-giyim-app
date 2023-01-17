import React from "react";

import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";
import Footer from "../../../components/Footer/Footer";

const LoginLayout = () => {
  return (
    <>
      <Container maxWidth="xs" sx={{ minHeight: "75vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Box>
        <Outlet />
      </Container>

      {/* <Footer /> */}
    </>
  );
};
export default LoginLayout;
