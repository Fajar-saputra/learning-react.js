import "./index.css";
import App from "./App.jsx"; // App.jsx mungkin tidak digunakan di sini, tapi tidak apa-apa jika memang tidak ada komponen root yang memanggilnya
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home";
import About from "./About";
import Data from "./assets/components/Data.jsx";
import Products from "./assets/components/Products.jsx";
import Seller from "./assets/components/Seller.jsx";
import Customers from "./assets/components/Customers.jsx";

// PASTIKAN import ini dari 'react-router-dom', BUKAN 'react-router'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

createRoot(document.querySelector("#root")).render(
    <StrictMode>
        <BrowserRouter>
            {/* Navigasi Link */}
            <nav>
                <Link to="/"> Home </Link> | {/* Tambahkan pemisah atau styling jika perlu */}
                <Link to="/about"> About </Link> |
                {/* Link untuk nested routes - pengguna perlu tahu jalur lengkapnya */}
                <Link to="/data"> Data Overview </Link> |
                <Link to="/data/products"> Data Products </Link> |
                <Link to="/data/sellers"> Data Sellers </Link> |
                <Link to="/data/customers"> Data Customers </Link>
            </nav>

            <Routes>
                {/* Rute Top-Level */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route path="/data" element={<Data />}>
                    <Route index element={<div>Pilih dari sub-menu Data (Products, Sellers, Customers)</div>} />


                    {/* Rute Anak dari /data */}
                    <Route path="products" element={<Products />} />
                    <Route path="sellers" element={<Seller />} />
                    <Route path="customers" element={<Customers />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);