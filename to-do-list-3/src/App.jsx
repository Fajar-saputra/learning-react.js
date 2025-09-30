// import './App.css'

import ContextMedium1 from "./context/ContextMedium1";
import ContextBasic1 from "./context/ContextBasic1";
import ContextBasic2 from "./context/ContextBasic2";
import TodoApp from "./Todos/TodoApp";
import ContextHard from "./context/ContextHard";
import TodosApp from "./TodosContext/TodosApp";
import ProductsList from "./products/ProductsList";
import FilterableProducts from "./products/FilterableProducts";
import RegisterForm from "./formHandling/RegisterForm";

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
        <>
            {/* <TodoApp /> */}
            {/* <ContextBasic1 /> */}
            {/* <ContextBasic2 /> */}
            {/* <ContextMedium1 /> */}
            {/* <ContextMedium2 /> */}
            {/* <ContextHard /> */}
            {/* <TodosApp /> */}
            {/* <ProductsList /> */}
            {/* <FilterableProducts products={PRODUCTS} /> */}
            <RegisterForm />
        </>
    );
}

export default App;
