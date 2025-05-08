import React from "react";
import Products from "../data/ProductsData";

function ProductsCard() {
    return (
        <div>
            <div className="container">
                <div className="cards">
                    {Products.map((product, index) => (
                        <div key={index} className="card">
                            <img src={product.imageURL} alt={ product.nama}/>
                            <h4>{product.nama}</h4>
                            <p>{product.deskripsi}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductsCard;
