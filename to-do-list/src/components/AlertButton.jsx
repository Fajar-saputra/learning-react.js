export default function AlertButton({text, message}) {
    const handleClick = () => {
        alert(message)
    }

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
        <button onClick={handleClick} style={style}>{text }</button>
    )
}