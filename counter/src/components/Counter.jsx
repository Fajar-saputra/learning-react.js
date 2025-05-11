import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    // cara pertama untuk membuat function
    function tambah() {
        setCount(count + 1);
    }

    // cara kedua untuk membuat function
    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <h3>Nilai saat ini : {count}</h3>
            <button onClick={tambah}>Tambah 1</button>
            {/* cara ketiga untuk membuat function */}
            <button onClick={() => setCount(count - 1)}>Kurang 1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}
