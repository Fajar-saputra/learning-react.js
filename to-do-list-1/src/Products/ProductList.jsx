import { useEffect, useRef, useState } from "react";
import products from "../../public/products.json";
import Product from "./Product";

export default function ProductList() {
    const [product, setProduct] = useState([]);

    const loaded = useRef(false);

    useEffect(() => {
        console.log("testing dulu gak sih");
        
        if (loaded.current === false) {
            fetch("/products.json")
                .then((respon) => respon.json())
                .then((respon) => setProduct(respon))
                .then(() => (loaded.current = true));
        }
    });

    return (
        <>
            <h1>Product List </h1>
            {products.map((product) => (
                <Product product={product} key={product.id}/>
            ))}
        </>
    );
}
