import "./App.css";
import HomePage from "./pages/HomePage";
import ToursPage from "./pages/ToursPage";
import UmkmPage from "./pages/umkmPage";
import KafePage from "./pages/KafePage";
import HotelPage from "./pages/HotelPage";
import Footer from "./pages/Footer";
import ServicesPage from "./pages/ServicesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import PaymentPage from "./pages/PaymentPage";

function App() {
    return (
        <Router>
            <Navbar />

            <div className="app container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tour" element={<ToursPage />} />
                    <Route path="/umkm" element={<UmkmPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/hotel" element={<HotelPage />} />
                    <Route path="/kafe" element={<KafePage />} />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="/Footer" element={<Footer />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
