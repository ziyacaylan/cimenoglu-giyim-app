import React, { useState } from "react";
import {
  login,
  logGoogleUser,
  onUserShateChanged,
} from "../../utils/firebase/firebase.utils";
// import { loginAsync, loginWithGooglePopup } from "../../store/auth/authService";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
    // console.log("kullanıcı geldi----!", user);
    const isUserLogin = onUserShateChanged();

    console.log(isUserLogin, user);
    isUserLogin && user && navigate("/profile/update", { replace: true });
  };

  const handleSubmitLoginWithGoogle = async () => {
    const user = await logGoogleUser();
    if (user) {
      navigate("/", { replace: true });
    }
  };

  return (
    <Box sx={{ width: "350px", margin: "10px" }}>
      {/* //  maxWidth="xs"> */}
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
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
    </Box>
  );
};
export default SignIn;
