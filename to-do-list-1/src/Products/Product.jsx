export default function Product({product}) {
    return (
        <div>
            <strong>{product.id}. {product.name}</strong>
            <p>Price - Rp. { product.price }</p>
        </div>
    )
}