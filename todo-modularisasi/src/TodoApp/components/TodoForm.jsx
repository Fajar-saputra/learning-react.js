export default function TodoForm({handleAdd, setInput, input}) {
    
    return (
        <form onClick={handleAdd}>
            <input
                type="text"
                placeholder="Enter your todo..."
                onChange={(e) => setInput(e.target.value)}
                value={input}
                autoFocus />
            
            <button type="submit">Add</button>
        </form>
    )
}