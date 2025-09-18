// import "./App.css";
import ContextBasic from "./context/ContextBasic";
import ContextMedium from "./context/ContextMedium";
import { useState } from "react";

function App() {

    const [name, setValue] = useState({ nama: "asep", umur: 20 })

    return (
        <>
            {/* <TodoList /> */}
            {/* <ContextBasic /> */}
            <ContextMedium />
        </>
    );
}

export default App;
