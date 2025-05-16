import "./Styling.css"; // Atau path ke file CSS global Anda
import Keranjang from "./components/UlangTodo2";
import Todo from "./components/Todo";
import UlangTodo from "./components/UlangTodo1";


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
