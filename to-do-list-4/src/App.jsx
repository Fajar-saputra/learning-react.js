import "./App.css";
import ContextBasic from "./context/ContextBasic";
import NotesApp from "./NotesApp/NotesApp";
import FilterProduct from "./products/FilterProduct";
import Todo from "./TodoApp/Todo";
import TodoReducer from "./TodoReducer";

function App() {
    const PRODUCTS = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    ];
    return (
        <div>
            {/* <ContextBasic /> */}
            {/* <Todo />  */}
            {/* <NotesApp /> */}

            <FilterProduct products={PRODUCTS} />
        </div>
    );
}

export default App;
