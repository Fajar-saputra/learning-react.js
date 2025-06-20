// src/Navbar.js
import React from 'react'; // Pastikan React di-import
import { Link } from 'react-router-dom'; // <--- BARIS INI PENTING!

// Hapus props yang tidak digunakan agar kode lebih bersih
export default function Navbar() {
    return (
        <nav className="container nav">
            <div className="nav-brand">Alahan Panjang</div>
            <div className="navbar">
                <Link to={"/home"} className="nav-link">
                    Home
                </Link>
                <Link to={"/servies"} className="nav-link"> 
                    Services
                </Link>
                <Link to={"/tour"} className="nav-link">
                    Tour
                </Link>
                <Link to={"/hotel"} className="nav-link">
                    Hotel
                </Link>
                <Link to={"/umkm"} className="nav-link">
                    UMKM
                </Link>
                <Link to={"/kafe"} className="nav-link">
                    Kafe
                </Link>
            </div>
            <div className="login">
                <button className="btn-primary">Sign In</button>
            </div>
        </nav>
    );
}