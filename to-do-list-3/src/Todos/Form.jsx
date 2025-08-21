export default function Form({handle, text, input}) {
    return (
        <form onSubmit={handle}>
            <input type="text" placeholder="Enter Todo..." value={text} onChange={(e) => input(e.target.value)} />
            <button type="button">
                ➕
            </button>
        </form>
    );
}
