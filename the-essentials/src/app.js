const root = document.getElementById("root")
const container = ReactDOM.createRoot(root)

const Header = () => {
    return (
        <h1>Cara buat komponent</h1>
    )
}


container.render(<Header/>)