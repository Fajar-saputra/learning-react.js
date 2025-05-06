import React from "react";
// import '../data/App.css';

const ProductsCard = (props) => {
    return (
        <div className="container">
            <div className="cards">
                <div className="card">
                    <img src={props.urlImage} alt="test"/>
                    <h3>{props.nama }</h3>
                    <p>{props.deskripsi}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;
