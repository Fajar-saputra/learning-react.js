export default function EventDefault({onClick}) {
    return (
        <form action="">
            <input type="text" className="style-input" placeholder="Enter message"/>
            <button onClick={onClick} className="style-button">Search</button>
        </form>
    )
}