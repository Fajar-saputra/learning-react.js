export default function Profile({ name, umur, bio }) {
    return (
        <div>
            <p><strong>{name}</strong></p>
            <p>{umur}</p>
            <p>{ bio}</p>
        </div>
    );
}
