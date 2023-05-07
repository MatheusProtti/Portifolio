import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Components/Header/index";
import Footer from "./Components/Footer";
import ArrowUp from "./Components/ArrowUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
    <ArrowUp />
  </React.StrictMode>
);
