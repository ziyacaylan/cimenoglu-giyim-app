import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import Button from "@mui/material/Button";

import "./navigation.styles.scss";

import DarkModeSwitch from "../../components/DarkModeWsitch";

import { useSelector } from "react-redux";
import { logout } from "../../store/auth/authSlice.js";
import { useDispatch } from "react-redux";

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
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import BasketMenu from "./BasketMenu";

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
  const amount = useSelector((state) => state.basket.amount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [basketAnchorEl, setBasketAnchorEl] = useState(null);

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

  const clickLoginHandle = () => {
    !user && navigate("/sign-in", { replace: true });
    //handleMenuClose();
  };
  const clickRegisterHandle = () => {
    !user && navigate("/sign-up", { replace: true });
    //handleMenuClose();
  };

  const clickProfileHandle = () => {
    user && navigate("/profile/update", { replace: true });
    handleMenuClose();
  };

  const clickOrdersHandle = () => {
    user && navigate("/profile/orders", { replace: true });
    handleMenuClose();
  };
  const clickLogoutHandle = () => {
    user && dispatch(logout());
    // if (!user) {
    navigate("/", { replace: true });
    handleMenuClose();
    // }
  };

  const handleBasketMenuClose = () => {
    setBasketAnchorEl(null);
  };
  const handleBasketMenuOpen = (event) => {
    setBasketAnchorEl(event.currentTarget);
  };
  // basket menu
  const basketMenuId = "primary-basket-menu";
  const renderBasketMenu = (
    <BasketMenu
      basketAnchorEl={basketAnchorEl}
      handleBasketMenuClose={handleBasketMenuClose}
      basketMenuId={basketMenuId}
      handleBasketMenuOpen={handleBasketMenuOpen}
    />
  );
  const menuId = "primary-search-account-menu";
  const renderMenu = user ? (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      MenuListProps={{ onMouseLeave: handleMenuClose }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <MenuItem onClick={clickProfileHandle}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "spaceBetween",
            alignItems: "center",
          }}
        >
          <PersonIcon sx={{ marginRight: "0.625rem", color: "primary.main" }} />
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
          <LogoutIcon sx={{ marginRight: "0.625rem", color: "primary.main" }} />
          <Box sx={{ color: "primary.main" }}>Logout</Box>
        </Box>
      </MenuItem>
    </Menu>
  ) : (
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
      open={Boolean(isMenuOpen)}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={clickLoginHandle}>
        <AssignmentIndIcon sx={{ color: "primary.main" }} />
        <Typography component="span" marginLeft={1} color="primary.main">
          Sign in
        </Typography>
      </MenuItem>
      <MenuItem onClick={clickRegisterHandle}>
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
      open={Boolean(isMobileMenuOpen)}
      onClose={handleMobileMenuClose}
    >
      {/* shop */}
      <MenuItem onClick={() => navigate("/shop", { replace: true })}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <LocalGroceryStoreIcon sx={{ color: "primary.main" }} />
        </IconButton>
        <Typography component="a" color="primary.main">
          SHOP
        </Typography>
      </MenuItem>
      {/* basket */}
      <MenuItem onClick={() => setBasketAnchorEl(!basketAnchorEl)}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          sx={{ color: "primary.main" }}
        >
          <Badge badgeContent={amount} color="error">
            <NotificationsIcon color="primary.main" />
          </Badge>
        </IconButton>
        <Typography component="a" color="primary.main">
          BASKET
        </Typography>
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
          {user ? (
            <Avatar
              alt="Remy Sharp"
              src={user.photoURL}
              sx={{ width: 24, height: 24 }}
            />
          ) : (
            <AccountCircle />
          )}
        </IconButton>
        <Typography component="a" color="primary.main">
          PROFILE
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "15px" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
            onClick={() => navigate("/", { replace: true })}
          >
            <Link>
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
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* shop */}
            <Box display="flex" alignItems="center" justifyContent="center">
              {/* <Link href="#" underline="none"> */}
              <Button
                sx={{ display: "block", color: "white" }}
                variant="outlined"
                component="label"
                aria-controls={menuId}
                onClick={() => navigate("/shop", { replace: true })}
              >
                shop
              </Button>
              {/* </Link> */}
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
              {user ? (
                <Avatar
                  alt="Remy Sharp"
                  src={user.photoURL}
                  sx={{ width: 24, height: 24 }}
                />
              ) : (
                <AccountCircle />
              )}
            </IconButton>
            {/* DarkMode switch here */}
            <DarkModeSwitch />
            {/* Basket */}
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              aria-controls={basketMenuId}
              onClick={handleBasketMenuOpen}
            >
              <Badge badgeContent={amount} color="error">
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
      {renderBasketMenu}
    </Box>
  );
  //console.log("navigation yazdırıyor...", user);
  //console.log("user ı aldım geldim", user);
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
