import "./Styling.css"; // Atau path ke file CSS global Anda
import Keranjang from "./components/Keranjang";
import Todo from "./components/Todo";
import UlangTodo from "./components/UlangTodo";


function App() {
    return (
        <>
        <Todo />
        <UlangTodo />
        <Keranjang />
        </>
    );
}

export default App;
