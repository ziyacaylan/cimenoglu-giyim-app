import React, { useState } from "react";
import {
  login,
  logGoogleUser,
  onUserShateChanged,
} from "../../utils/firebase/firebase.utils";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Container } from "@mui/material";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error("Email and Password required...!");
      return;
    }
    const user = await login(email, password);
    user && onUserShateChanged();
    //user && navigate("/profile/update", { replace: true });
  };

  const handleSubmitLoginWithGoogle = async () => {
    const user = await logGoogleUser();
    // console.log("buradan geldi");
    //console.log(user);
    if (user) {
      //navigate("/", { replace: true });
      navigate("/profile/update", { replace: true });
      user && onUserShateChanged();
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          I already have an account
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Sign in with your email and password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="sign-in_email"
                label="Email Address"
                name="sign-in_email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="sign-in_password"
                label="Password"
                type="password"
                id="sign-in_password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
        <Box justifyContent="center">
          <Box>
            <Typography
              variant="inherit"
              sx={{ textAlign: "center" }}
              gutterBottom
            >
              OR
            </Typography>
            <GoogleButton onClick={handleSubmitLoginWithGoogle} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default SignIn;
