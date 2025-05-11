export default function Input({value, onChange}) {
    return (
        <input type="text"
            placeholder="Enter your name"
            value={value}
            className="inputAja"
            onChange={(e) => onChange(e.target.value)
            }
        />
    )
}