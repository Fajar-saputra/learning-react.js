export default function Toolbar({ onClick}) {
    const style = {
        backgroundColor: "yellow",
        margin: "1rem",
        outline: "none",
        border: "none",
        borderRadius: ".3rem",
        padding: ".7rem 2rem",
        boxShadow: "0 0 1rem rgba(0,0,0,.2)",
        cursor: "pointer",
    };

    return (
        <div onClick={onClick}>
            <button onClick={onClick} style={style}>First </button>
            <button onClick={onClick} style={style}>Second </button>
        </div>
    );
}
