import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Welcome from "./components/Welcome.jsx";
import Second from "./components/Second.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Questions from "./components/Questions.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Welcome />
    <Second />
    <Questions />
    <Footer />
  </>
);
