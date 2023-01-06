import "./App.css";

import { useSelector } from "react-redux";
import { useState, useMemo } from "react";

import { Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import SharedLayout from "./routes/SharedLayout";
import Home from "./routes/Home";
import Login from "./routes/Login";

//theme
import { getDesignTokens } from "./theme/theme";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Shop = () => {
  return <h1>Ben mağaza sayfasıyım</h1>;
};

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
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/sign-in" element={<Login />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
