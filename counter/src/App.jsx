import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import DarkMode from "./components/DarkMode";
import Header from "./components/Header";
import Form from "./components/Input/Form";
import InputFrom from "./components/InputFrom";
import HiddenContent from "./components/ShowContent";

function App() {
    function handleClick() {
        return alert("You click me");
    }

    return (
        <>
            <Header />
            <Counter />
            <Button text="Click Me!!!" onClick={handleClick} />
            <DarkMode />
            <HiddenContent />
            <InputFrom />
            <Form/>
        </>
    );
}

export default App;
