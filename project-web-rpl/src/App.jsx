import "./App.css";
import HomePage from "./pages/HomePage";
import ToursPage from "./pages/ToursPage"
import UmkmPage from "./pages/umkmPage";
import KafePage from "./pages/KafePage";
import Footer from "./pages/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./pages/Navbar";

function App() {
    return (
        <Router>
            <Navbar />

            <div className="app container">
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/tour" element={<ToursPage />} />
                    <Route path="/umkm" element={<UmkmPage />} />
                    <Route path="/kafe" element={<KafePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
