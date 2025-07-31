import { useState } from "react";

export default function Counter({props}) {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    };

    const style = {
        backgroundColor: "yellow",
        margin: "1rem",
        outline: "none",
        border: "none",
        borderRadius: ".3rem",
        padding: ".7rem 2rem",
        boxShadow: "0 0 1rem rgba(0,0,0,.2)",
        cursor: "pointer",
    };

    return (
        <button onClick={handleCount} style={style}>
            Klik! {count} | {props}
        </button>
    );
}
