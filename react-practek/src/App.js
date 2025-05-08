import React from "react";
import "./App.css";
import ProductsCard from "./component/ProductsCard"
import Footer  from "./component/Footer";
import Hello from "./component/Hello";

function App() {
    return (
        <div>
            <Hello />
                    <ProductsCard />
            <Footer />
        </div>
    );
}

export default App;
