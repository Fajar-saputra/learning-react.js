import React from "react";
import "./App.css";
import ProductsCard from "./component/ProductsCard"

const Hello = () => {
    return (
        <div className="container">
            <p>
                Mencari mobil untuk keluarga? Tidak perlu khawatir. Disini bisa menjadi jawaban terbaik untuk kamu. Tidak hanya memiliki tempat duduk yang luas, desain sederhananya pun cukup memukau
                pengguna, loh.
            </p>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="container">
            <p
                style={{
                    fontSize: "10px",
                    textAlign: "center",
                }}
            >
                copyright fajarsaputra made in 2024
            </p>
        </div>
    );
};

function App() {
    return (
        <div>
            <Hello />
            <ProductsCard
                urlImage="https://images.unsplash.com/photo-1621135802920-133df287f89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjA0MjYyNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                nama="Lamborghini"
                deskripsi="Mobil Lamborghini memiliki interior dan body yang kokoh"
            />
            <ProductsCard
                urlImage="https://images.unsplash.com/photo-1621135802920-133df287f89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjA0MjYyNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                nama="Lamborghini"
                deskripsi="Mobil Lamborghini memiliki interior dan body yang kokoh"
            />
            <ProductsCard
                urlImage="https://images.unsplash.com/photo-1621135802920-133df287f89c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NjA0MjYyNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                nama="Lamborghini"
                deskripsi="Mobil Lamborghini memiliki interior dan body yang kokoh"
            />
            <Footer />
        </div>
    );
}

export default App;
