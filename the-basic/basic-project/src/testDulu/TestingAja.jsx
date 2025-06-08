import { useState } from "react";

export default function TestingAja() {
    const [isPositif, setPositif] = useState(false);

    const handleClick = () => {
        setPositif(!isPositif);
    };

    return (
        <div>
            <button onClick={handleClick}>{isPositif ? "Tutup" : "Buka"}</button>
            {isPositif && <p>Ini hanya sebagai testing</p>}
        </div>
    );
}
