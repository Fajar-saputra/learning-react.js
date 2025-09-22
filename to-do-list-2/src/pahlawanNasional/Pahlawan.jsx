let id = 0;
export default function Pahlawan({ pahlawan }) {
    

    return (
        <div>
            <p>No. {id++} <strong>- { pahlawan.name }</strong></p>
        </div>
    )
}