import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductsList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((res) => setProducts(res));
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </ul>
        </div>
    );
}
