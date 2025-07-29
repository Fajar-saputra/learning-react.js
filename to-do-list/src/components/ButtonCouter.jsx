export default function ButtonCounter(count, handler) {
    return (
        <button onClick={handlerCount} style={{ background: "hotpink", outline: "none", border: "none", padding: ".5rem 1rem", marginInline: ".5rem" }}>
            Klik Me! {count}
        </button>
    );
}
