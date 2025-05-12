import { useState } from "react";   

export default function InputChecker() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>
        {text.length > 5? "Valid!!" : "Minimal 5 karakter!"}
      </p>
    </div>
  );
}
