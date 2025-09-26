import { useEffect, useState } from "react";
import Pahlawan from "./Pahlawan";

export default function ListPahlawan() {
    const [pahlawans, setPahlawan] = useState([]);

    useEffect(() => {
        fetch("/pahlawan.json")
            .then((res) => res.json())
            .then((res) => setPahlawan(res))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <ul>
                {pahlawans.map((pahlawan, index) => (
                    <Pahlawan pahlawan={pahlawan} id={index} key={index} />
                ))}
            </ul>
        </div>
    );
}
