export default function Product({ product }) {
    return (
        <div>
            <p>
                <strong>
                    {product.id} {product.name}
                </strong>
            </p>
            <div style={{marginLeft: "1rem"}}>
                <p>Price : {product.price}</p>
                <p>Stock : {product.stock}</p>
            </div>
        </div>
    );
}
