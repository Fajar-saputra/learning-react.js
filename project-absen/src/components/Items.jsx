import React from "react";

export default function Items({ person }) {
    return (
        <div className="items-box">
            {person.map((item) => (
                <div className="box" key={item.id}>
                    <img src={item.image} alt="" />
                    <div>
                        <h2 key={item.id}>{item.nama}</h2>
                        <p>{item.umur}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
