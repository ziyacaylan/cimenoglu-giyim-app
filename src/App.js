import "./App.css";

import { useSelector } from "react-redux";
import { useState, useMemo } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import SharedLayout from "./routes/Layout/SharedLayout";
import LoginLayout from "./routes/Layout/LoginLayout";
import Home from "./routes/Home";
import Login from "./routes/Layout/LoginLayout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Shop from "./routes/Shop";
import Profile from "./routes/Profile/Profile";

import { toast, Toaster } from "react-hot-toast";

//theme
import { getDesignTokens } from "./theme/theme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProfileUpdate from "./components/ProfileUpdate/ProfileUpdate";
import Orders from "./components/Orders/Orders";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import "@fontsource/open-sans-condensed";
import CategoryPreview from "./components/CategoryPreview";
import Categories from "./components/Categories/Categories";
import Checkout from "./routes/Checkout/Checkout";
import Search from "./routes/Search";

function App() {
  const [mode, setMode] = useState("dark");
  const darkMode = useSelector((state) => state.theme.darkMode);
  const user = useSelector((state) => state.auth.user);
  const correntCategory = useSelector(
    (state) => state.categories.currentCategory
  );
  //console.log(user);
  //useProductListener();
  useMemo(() => {
    darkMode ? setMode("light") : setMode("dark");
  }, [darkMode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const currentUser = user ? true : false;

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/sign-in" />;
  };
  //console.log(correntCategory);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/search/*" element={<Search />} />
            <Route path="shop/*" element={<Shop />}>
              <Route element={<Categories />} index />
              <Route
                path={`:${correntCategory}`}
                element={<CategoryPreview category={correntCategory} />}
              />
            </Route>
            <Route
              path="/checkout"
              element={user ? <Checkout /> : <Navigate to="/" />}
            />

            <Route element={<LoginLayout />}>
              <Route
                path="/sign-in"
                element={!user ? <SignIn /> : <Navigate to="/" />}
              />
              <Route
                path="/sign-up"
                element={!user ? <SignUp /> : <Navigate to="/" />}
              />
            </Route>
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            >
              <Route
                path="/profile/update"
                element={
                  <RequireAuth>
                    <ProfileUpdate />
                  </RequireAuth>
                }
              />
              <Route
                path="/profile/orders"
                element={
                  <RequireAuth>
                    <Orders />
                  </RequireAuth>
                }
              />
              <Route
                path="/profile/orders/order-details"
                element={
                  <RequireAuth>
                    <OrderDetails />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
