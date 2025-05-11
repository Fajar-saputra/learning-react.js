import { useState } from "react";

export default function ShowContent() {
    const [show, setShow] = useState(true);



    return (
        <div>
            {show && <p>Testing</p>}
            <button onClick={() => setShow(!show)}>
                {show ? "tampil":"sembunyikan"}
            </button>
        </div>
    )
} 