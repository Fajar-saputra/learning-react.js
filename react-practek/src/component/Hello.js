import React from "react";



const Hello = () => {
    const handleClick  = () => {
       return console.log("Test aja");
    }

    return (
        <div className="container">
            <p>
                Mencari mobil untuk keluarga? Tidak perlu khawatir. Disini bisa menjadi jawaban terbaik untuk kamu. Tidak hanya memiliki tempat duduk yang luas, desain sederhananya pun cukup memukau
                pengguna, loh.
                <button onClick={handleClick}>Click Me!!</button>
            </p>
        </div>
    );
};


export default Hello;