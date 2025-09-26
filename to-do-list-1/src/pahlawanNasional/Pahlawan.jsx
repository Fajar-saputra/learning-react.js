export default function Pahlawan({ pahlawan, id }) {
    return (
        <div>
            <p>
                No. {id + 1} - {pahlawan.name}
            </p>
        </div>
    );
}
