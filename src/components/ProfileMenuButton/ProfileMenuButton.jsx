import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/system";

import { useSelector } from "react-redux";
import { logout } from "../../store/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileMenuButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
  const clickProfileHandle = () => {
    user && navigate("/profile/update", { replace: true });
  };

  const clickOrdersHandle = () => {
    user && navigate("/profile/orders", { replace: true });
  };
  const clickLogoutHandle = () => {
    user && dispatch(logout());
    // if (!user) {
    navigate("/", { replace: true });
    // }
  };

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        variant="outlined"
        onClick={handleClick}
        onMouseOver={handleClick}
        startIcon={
          user && (
            <Avatar
              alt="Remy Sharp"
              src={`${user.photoURL}`}
              sx={{ width: 24, height: 24 }}
            />
          )
        }
      >
        Profile
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={clickProfileHandle}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "spaceBetween",
              alignItems: "center",
            }}
          >
            <PersonIcon
              sx={{ marginRight: "0.625rem", color: "primary.main" }}
            />
            <Box sx={{ color: "primary.main" }}>Profile</Box>
          </Box>
        </MenuItem>
        <MenuItem onClick={clickOrdersHandle}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "spaceBetween",
              alignItems: "center",
            }}
          >
            <ShoppingCartIcon
              sx={{ marginRight: "0.625rem", color: "primary.main" }}
            />{" "}
            <Box sx={{ color: "primary.main" }}>Orders</Box>
          </Box>
        </MenuItem>
        <MenuItem onClick={clickLogoutHandle}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "spaceBetween",
              alignItems: "center",
            }}
          >
            <LogoutIcon
              sx={{ marginRight: "0.625rem", color: "primary.main" }}
            />
            <Box sx={{ color: "primary.main" }}>Logout</Box>
          </Box>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenuButton;
