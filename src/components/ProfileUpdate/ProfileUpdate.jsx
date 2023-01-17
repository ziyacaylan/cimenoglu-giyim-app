import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";

import {
  updateUser,
  logout,
  auth,
  emailVerification,
  resetPassword,
} from "../../utils/firebase/firebase.utils";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout as logoutHandle } from "../../store/auth/authSlice";

const ProfileUpdate = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const [fullName, setFullName] = useState(user.displayName || "");
  const [photoUrl, setPhotoUrl] = useState(user.photoURL || "");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    await updateUser({
      displayName: fullName.toUpperCase(),
      photoURL: photoUrl,
    });
    dispatch(
      login({
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        emailVerification: auth.currentUser.emailVerified,
        photoURL: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
      })
    );
  };

  const handleUpdateUserPassword = async (e) => {
    e.preventDefault();
    await resetPassword(password);
    setPassword("");
    navigate("/sign-in", { replace: true });
  };
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);

  const handleVerification = async () => {
    await emailVerification();
    const result = logout();
    //console.log("çıkış yapıldı", result);
    // setTimeout(() => {
    dispatch(logoutHandle());
    navigate("/sign-in", { replace: true });
    // }, 1500);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container>
      <Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 5,
          }}
        >
          <Box>
            <Avatar
              alt="Remy Sharp"
              src={
                user.photoURL ? user.photoURL : "/static/images/avatar/1.jpg"
              }
              sx={{ width: 256, height: 256 }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{ margin: "10px auto" }}
            >
              {user.email}
            </Typography>
            {!user.emailVerification && (
              <Button
                type="text"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleVerification}
              >
                Email verification
              </Button>
            )}
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              onSubmit={handleUpdateUser}
              noValidate
              sx={{
                mt: 3,
                width: "100%",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Full Name"
                    variant="standard"
                    fullWidth
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="standard-basic2"
                    label="Photo URL Address"
                    variant="standard"
                    fullWidth
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!user.emailVerification}
              >
                update profile
              </Button>
            </Box>
            <Box
              component="form"
              onSubmit={handleUpdateUserPassword}
              noValidate
              sx={{ mt: 3, width: "50%" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl variant="standard" fullWidth>
                    <InputLabel htmlFor="standard-adornment-password">
                      New Password
                    </InputLabel>
                    <Input
                      id="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showNewPassword ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowNewPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showNewPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type="submit"
                disabled={!user.emailVerification}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                update password
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default ProfileUpdate;
