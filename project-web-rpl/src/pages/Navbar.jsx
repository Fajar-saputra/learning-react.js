// src/Navbar.js
import React from 'react'; 
import { Link } from 'react-router-dom'; 

export default function Navbar() {
    return (
        <nav className="container nav">
            <div className="nav-brand"><Link to={"/"}>Alahan Panjang</Link></div>
            <div className="navbar">
                <Link to={"/"} className="nav-link">
                    Home
                </Link>
                <Link to={"/services"} className="nav-link"> 
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