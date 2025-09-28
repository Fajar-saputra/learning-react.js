import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Vocation from "./pages/Vocation.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vocation" element={<Vocation />} />
      </Routes>
    </BrowserRouter>
    </StrictMode>
);
