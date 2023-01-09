import "./App.css";

import { useSelector } from "react-redux";
import { useState, useMemo } from "react";

import { Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import SharedLayout from "./routes/SharedLayout";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Shop from "./routes/Shop";
import Profile from "./routes/Profile/Profile";

import { Toaster } from "react-hot-toast";

//theme
import { getDesignTokens } from "./theme/theme";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProfileUpdate from "./components/ProfileUpdate/ProfileUpdate";
import Orders from "./components/Orders/Orders";
import OrderDetails from "./components/OrderDetails/OrderDetails";

function App() {
  const [mode, setMode] = useState("dark");
  const darkMode = useSelector((state) => state.theme.darkMode);

  useMemo(() => {
    darkMode ? setMode("light") : setMode("dark");
  }, [darkMode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Toaster />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="/profile/update" element={<ProfileUpdate />} />
              <Route path="/profile/orders" element={<Orders />} />
              <Route
                path="/profile/orders/order-details"
                element={<OrderDetails />}
              />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
