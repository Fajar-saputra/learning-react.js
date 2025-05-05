const root = document.getElementById("root");
const container = ReactDOM.createRoot(root);

const Header = () => {
    return <h1>Cara buat komponent</h1>;
};

function MainContent() {
    return (
        <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laboriosam corrupti tenetur quaerat fuga illum aliquid praesentium sit minus officia eum, asperiores fugit veniam consequuntur
            velit magni numquam ab pariatur suscipit aperiam? Dolores ab quam reiciendis rerum corporis eos est.
        </p>
    );
}

const Footer = () =>{
    return (
        <>
     <footer>copy; right by <b>Fajar saputra</b> made 2025</footer>
        </>
    )
}

function App() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer/>
        </>
    );
}

container.render(<App />);
