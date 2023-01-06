import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import { ColorContextProvider } from "./context/ColorContext";
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ColorContextProvider> */}
      <Router>
        <App />
      </Router>
      {/* </ColorContextProvider> */}
    </Provider>
  </React.StrictMode>
);
