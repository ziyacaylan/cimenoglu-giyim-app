import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";

import SignUp from "../../components/SignUp";
import SignIn from "../../components/SignIn";

const Login = () => {
  return (
    <Card
      sx={{
        minWidth: "350px",
        maxWidth: "800px",
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
    </Card>
  );
};
export default Login;
