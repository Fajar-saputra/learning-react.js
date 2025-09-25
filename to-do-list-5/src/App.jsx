// import "./App.css";
import ContextBasic from "./context/ContextBasic";
import ContextMedium from "./context/ContextMedium";
import { useState } from "react";
import FilterProduct from "./product/FilterProduct";

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
            {/* <TodoList /> */}
            {/* <ContextBasic /> */}
            {/* <ContextMedium /> */}
            <FilterProduct products={PRODUCTS}/>
        </>
    );
}

export default App;
