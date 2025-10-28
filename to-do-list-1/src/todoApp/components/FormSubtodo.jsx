export default function FormSubtodo({handleAdd, todo, inpSub, setInpSub}) {
    return (
        <form onSubmit={(e) => handleAdd(e, todo.id)}>
            <input type="text" placeholder="New sub..." value={inpSub[todo.id] || ""} onChange={(e) => setInpSub({ ...inpSub, [todo.id]: e.target.value })} />
            <button type="submit">➕</button>
        </form>
    );
}
