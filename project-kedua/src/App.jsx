import "./App.css";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import GreetingCard from "./components/Greeting/GreetingCard";
import Header from "./components/Header";
import LiveTextDisplay from "./components/LiveTextDisplay";
import MainContent from "./components/MainContent";
import ToggleVisibility from "./components/ToggleVisibility";

function App() {
    return (
        <div>
        <Header appName="React" developer="Fajar saputra" />
        <MainContent />
        <GreetingCard />
        <Counter />
        <LiveTextDisplay />
        <ToggleVisibility />
        <Footer />
        </div>
    );
}

export default App;
