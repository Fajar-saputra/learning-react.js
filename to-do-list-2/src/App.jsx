import "./Styling.css"; // Atau path ke file CSS global Anda
import Keranjang from "./components/Keranjang";
import Todo from "./components/Todo";
import UlangTodo from "./components/UlangTodo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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

function App() {
    return (
        <Router>
            <nav style={{ background: "hotpink", padding: "1rem", display: "flex", gap: "1rem" }}>
                <Link to={"/home"}>Home</Link>
                <Link to={"/about"}>About</Link>
            </nav>

            <div>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
