import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../src/App.css";
import "font-awesome/css/font-awesome.min.css";

// Pages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Includes
import Footer from "./components/includes/Footer";
import Header from "./components/includes/Header";

//Components
import Home from "./components/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);
