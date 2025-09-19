export default function And({ text, isDeleted }) {
    return <>{isDeleted && <p style={{ color: "green", fontWeight: "bold" }}>{text}</p>}</>;
}
