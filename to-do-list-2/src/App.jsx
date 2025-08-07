import Container from "./components/Container";
import "./Styling.css";
import React from "react";
import ProductTable  from "./components/productTable/FilterableProductTable";
import Todo from "./components/todoApp/todo";


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
            <Container>
            <ProductTable product={PRODUCTS}/>
            <Todo />
            </Container>
        </>
    );
}

export default App;
