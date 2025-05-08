import Products from "../data/Products";

export default function Cards() {
    return (
        <div className="cards">
            {Products.map((product, index) => (
                <div key={index} className="card">
                    <img src={product.imageURL} alt={product.nama} />
                    <h4>{product.nama}</h4>
                    <p>{product.deskripsi}</p>
                </div>
            ))}
        </div>
    );
}
