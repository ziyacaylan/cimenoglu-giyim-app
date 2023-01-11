import React from "react";

import { Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/system";

const LoginLayout = () => {
  return (
    <Container maxWidth="xs">
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
      {/* <Card
        sx={{
          // minWidth: "350px",
          // maxWidth: "800px",
          margin: "15px auto",
          fontSize: "1.8rem",
          color: grey[800],
          // minHeight: "175px",
          // backgroundColor: "whitesmoke",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <SignIn />
          <SignUp />
        </CardContent>
      </Card> */}
    </Container>
  );
};
export default LoginLayout;
