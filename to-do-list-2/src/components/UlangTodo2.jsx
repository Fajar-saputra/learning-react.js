import { useState } from "react";

export default function Keranjang() {
    const [list, setList] = useState([
        { id: 123, title: "Jambu" },
        { id: 124, title: "Rambutan" },
        { id: 127, title: "Duku" },
        { id: 128, title: "Bulu" },
    ]);

    const [input, setInput] = useState("");

    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const handleEditStart = (id, title) => {
        setEditId(id);
        setEditText(title);
    };

    const handleEditSubmit = () => {
        if (editText.trim().length < 4) {
            alert("Minimal 4 huruf!");
            return;
        }

        const updated = list.map((item) => (item.id === editId ? { ...item, title: editText.trim() } : item));

        setList(updated);
        setEditId(null);
        setEditText("");
    };

    const handleHapus = (id) => {
        setList(list.filter((item) => item.id !== id));
    };

    const handleAdd = (e) => {
        e.preventDefault();

        if (input.trim() === "") return;

        if (input.length < 4) {
            alert("nama harus lebih dari 4 karakter!!");
            return;
        }

        const isDucplicate = list.some((item) => item.title.toLowerCase() === input.toLowerCase());

        if (isDucplicate) {
            alert("Sudah ada!!");
            setInput("");
            return;
        }

        const newItem = {
            id: Date.now(),
            title: input.trim(),
        };

        setList([...list, newItem]);
        setInput("");
    };

    return (
        <div>
            <h2>Keranjang Buah</h2>
            {/* input */}
            <form action="" onSubmit={handleAdd}>
                <input type="text" placeholder="Enter item" value={input} onChange={(e) => setInput(e.target.value)} />
                <button>Add</button>
            </form>
            <ul>
                <ul>
                    {list.map((item) => (
                        <li key={item.id}>
                            {editId === item.id ? (
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    onBlur={handleEditSubmit}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") handleEditSubmit();
                                    }}
                                    autoFocus
                                />
                            ) : (
                                <span onDoubleClick={() => handleEditStart(item.id, item.title)}>{item.title}</span>
                            )}
                            <button onClick={() => handleHapus(item.id)}>Hapus</button>
                        </li>
                    ))}
                </ul>
            </ul>
        </div>
    );
}
