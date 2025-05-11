import { useState } from "react";
import Input from "./Input";
import Display from "./Display";

export default function Form() {
    const [name, setName] = useState("");

    return (
        <div>
            <Input value={name} onChange={setName} />
            <Display name={name} />
        </div>
    );
}
