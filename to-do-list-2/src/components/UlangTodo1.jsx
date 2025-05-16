import { useState } from "react";

export default function UlangTodo() {
    const [list, setList] = useState([
        { id: 123, title: "Jambu" },
        { id: 124, title: "Rambutan" },
        { id: 127, title: "Duku" },
        { id: 128, title: "Bulu" },
    ]);

    const [input, setInput] = useState("");

    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");
    
    const handleStartEdit = (id, text) => {
        setEditId(id);
        setEditText(text)
    }

    const handleEditSubmit = () => {
        if (editText.trim().length < 4) {
            alert("Karakter harus lebih dari 4")
            return;
        }

        const updated = list.map(item => {
            item.id === editId ? { ...item, title: editText.trim() } : item;
        })
    }

    const handleHapus = (id) => {
        setList(list.filter((item) => item.id !== id));
    };

    const handleAdd = (e) => {
        e.preventDefault();

        if (input.trim() === "") return;

        const inputValue = input.trim();

        if (inputValue.length < 4) {
            alert("Karakter harus lebih dari 3");
            return;
        }

        const newItem = {
            id: Date.now(),
            title: input.trim(),
        };

        setList([...list, newItem]); // ✅ tambahkan item baru ke list
        setInput(""); // ✅ reset input setelah submit
    };

    return (
        <div>
            <h2>List Baru</h2>

            {/* Add item to list */}
            <form onSubmit={handleAdd}>
                <input
                    type="text"
                    placeholder="Enter your item"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} // ✅ update nilai input
                />
                <button type="submit">Add</button>
            </form>

            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        {editId === item.id ? 
                            (<input type="text"
                                value={editId}
                                onChange={(e) => setEditText(e.target.value)}
                                onBlur={handleEditSubmit}
                                onKeyDown={(e) =>{
                                    if (e.key === "Enter") handleEditSubmit();
                                }}
                                />) : <span></span>     
                    }

                        {item.title}
                        <button onClick={() => handleHapus(item.id)}>Hapus</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
