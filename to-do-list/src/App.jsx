import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TambahBuah from "./components/TambahBuah";
import UserProfileFetcher from "./components/UserProfileFetcher";
import ButtonCounter from "./components/ButtonCouter";

import { PRODUCTS } from "./PRODUCTS";
import "./App.css";

// Komponen Halaman Home Sederhana
const HomePage = () => (
    <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>Selamat Datang di Aplikasi Multi-Halaman Kita!</h1>
        <p>Ini adalah halaman utama. Coba navigasi ke halaman lain.</p>
    </div>
);

// Komponen Halaman About Sederhana
const AboutPage = () => (
    <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Tentang Aplikasi Ini</h2>
        <p>Aplikasi ini dibuat untuk belajar dasar-dasar React dan React Router DOM.</p>
        <p>Kita sudah membuat Counter, To-Do List, dan fetch data user!</p>
    </div>
);

const handlerCount = () => {
    setCount(count + 1);
};

function App() {
    return (
        <Router>
            <nav style={{ background: "#333", padding: "10px 20px", display: "flex", justifyContent: "center" }}>
                {/* 2. Gunakan <Link> untuk navigasi */}
                <Link to="/" style={{ color: "white", textDecoration: "none", margin: "0 15px", fontWeight: "bold" }}>
                    Home
                </Link>
                <Link to="/counter" style={{ color: "white", textDecoration: "none", margin: "0 15px", fontWeight: "bold" }}>
                    Counter
                </Link>
                <Link to="/todos" style={{ color: "white", textDecoration: "none", margin: "0 15px", fontWeight: "bold" }}>
                    To-Do List
                </Link>
                <Link to="/profile/1" style={{ color: "white", textDecoration: "none", margin: "0 15px", fontWeight: "bold" }}>
                    Profil Budi
                </Link>
                <Link to="/profile/2" style={{ color: "white", textDecoration: "none", margin: "0 15px", fontWeight: "bold" }}>
                    Profil Siti
                </Link>
                <Link to="/about" style={{ color: "white", textDecoration: "none", margin: "0 15px", fontWeight: "bold" }}>
                    About
                </Link>
            </nav>

            <div className="App">
                {/* 3. Gunakan <Routes> sebagai wadah untuk semua <Route> */}
                <Routes>
                    {/* 4. Setiap <Route> mendefinisikan path dan komponen yang akan dirender */}
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/counter" element={<Counter />} /> */}
                    {/* <Route path="/todos" element={<TodoList />} /> */}
                    {/* Contoh route dengan parameter dinamis (userId) */}
                    <Route path="/profile/:userId" element={<UserProfileFetcher />} />
                    <Route path="/about" element={<AboutPage />} />

                    {/* Opsional: Route untuk halaman 404 Not Found */}
                    <Route path="*" element={<h2 style={{ textAlign: "center", color: "red", marginTop: "50px" }}>404 - Halaman Tidak Ditemukan!</h2>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
