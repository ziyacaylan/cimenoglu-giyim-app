import "./App.css";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import SharedLayout from "./routes/SharedLayout";
import Home from "./routes/Home";
import Login from "./routes/Login";

const Shop = () => {
  return <h1>Ben mağaza sayfasıyım</h1>;
};

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign-in" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
