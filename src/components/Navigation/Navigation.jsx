import React from "react";
// import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./navigation.styles.scss";

import DarkModeSwitch from "../../components/DarkModeWsitch";
import ShoppingBasket from "../../components/Basket";

import { useSelector } from "react-redux";
import { logout } from "../../store/auth/authSlice.js";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import ProfileMenuButton from "../ProfileMenuButton/ProfileMenuButton";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "@mui/material/Link";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navigation = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <AssignmentIndIcon sx={{ color: "primary.main" }} />
        <Typography component="span" marginLeft={1} color="primary.main">
          Sign in
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <PersonAddAltIcon sx={{ color: "primary.main" }} />
        <Typography component="span" marginLeft={1} color="primary.main">
          Register
        </Typography>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* shop */}
      <MenuItem>
        <Link href="/shop" variant="outlined" underline="none">
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <LocalGroceryStoreIcon />
          </IconButton>
          SHOP
        </Link>
      </MenuItem>
      {/* basket */}
      <MenuItem>
        <Link href="/" variant="outlined" underline="none">
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={5} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          BASKET
        </Link>
      </MenuItem>
      {/* dark mode switch */}
      <MenuItem>
        <DarkModeSwitch />
      </MenuItem>
      {/* Profile  */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="primary.main"
        >
          <AccountCircle sx={{ color: "primary.main" }} />
        </IconButton>
        <Typography component="a" color="primary.main">
          PROFILE
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            <Link href="/">
              <CrwnLogo className="logo" />
            </Link>
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search???"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* shop */}
            <Box display="flex" alignItems="center" justifyContent="center">
              <Link href="/shop" underline="none">
                <Button
                  sx={{ display: "block", color: "white" }}
                  variant="outlined"
                  component="label"
                  aria-controls={menuId}
                >
                  shop
                </Button>
              </Link>
            </Box>
            {/* user  */}
            <IconButton
              aria-owns={anchorEl ? "menuId" : undefined}
              aria-haspopup="true"
              variant="outlined"
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{ margin: "0 1rem" }}
            >
              <AccountCircle />
            </IconButton>
            {/* DarkMode switch here */}
            <DarkModeSwitch />
            {/* Basket */}
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={5} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
  //console.log("navigation yazd??r??yor...", user);
  //console.log("user ?? ald??m geldim", user);
  // return (
  //   <div className="navigation">
  //     <Link to="/">
  //       <CrwnLogo className="logo" />
  //     </Link>

  //     <div className="nav-links-container">
  //       <Stack spacing={2} direction="row">
  //         <Link className="nav-link" to="/shop">
  //           <Button variant="outlined">SHOP</Button>
  //         </Link>
  //         {user ? (
  //           <ProfileMenuButton />
  //         ) : (
  //           <Link className="nav-link" to="/sign-in">
  //             <Button
  //               variant="outlined"
  //               onClick={() => (user ? dispatch(logout()) : "")}
  //             >
  //               SIGN IN
  //             </Button>
  //           </Link>
  //         )}

  //         <DarkModeSwitch />
  //         <ShoppingBasket />
  //       </Stack>
  //     </div>
  //   </div>
  // );
};
export default Navigation;
