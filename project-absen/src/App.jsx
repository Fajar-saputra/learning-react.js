import React, { useState } from "react";
import Items from "./Items";

import ListItems from "./data.js";

function App() {
    const [person, setPerson] = useState(ListItems);

    return (
        <>
            <div className="list-items">
                <div className="container">
                    <h1>React List Items</h1>
                    <Items />
                </div>
        </div>
        <p>{person}</p>
        </>
    );
}

export default App;
