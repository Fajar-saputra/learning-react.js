export default function Header(props) {
    return (
        <header className="App-header">
            <h1>Selamat Datang di Belajar {props.appName}</h1>
            <p>Dibuat oleh: {props.developer}</p>
        </header>
    );
}
