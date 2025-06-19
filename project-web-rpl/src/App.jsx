import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <nav className="nav">
                <Link to={"/home"} className="nav-link">Home</Link>
                <Link to={"/content"} className="nav-link">Content</Link>
            </nav>
            <div className="container">
                <HomePage />
            </div>
        </Router>
    );
}

export default App;
