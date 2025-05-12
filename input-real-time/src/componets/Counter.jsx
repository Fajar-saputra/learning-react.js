import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Counter : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Tambah 1</button>
        </div>
    );
}
