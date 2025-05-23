import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h3>Simple Counter</h3>
            <button onClick={handleDecrement}>-</button>
            <span>Count : {count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}