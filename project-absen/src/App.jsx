import React, { useState } from "react";
import Items from "./components/Items";

import { ListItems } from "./data";

function App() {
    const [person, setPerson] = useState(ListItems);
    const [click, setClick] = useState(true);

    const handleClick = () => {
        setPerson([]);
        setClick(!click);
    }

    return (
        <>
            <div className="list-items">
                <div className="container">
                    <h1>Daftar Hadir : {person.length}</h1>
                    <Items person={person} />

                    {click? (
                        <button className="btn-hapus" onClick={handleClick}>
                            hapus semua
                        </button>
                    ) : (
                        <p>Kosong</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
