function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan={2}>{category}</th>
        </tr>
    );
}

function ProductRow({ product }) {
    const product = product.stucked ? product.name : <span style={{ color: "red" }}>{product.name}</span>;
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

function ProductTable({ products }) {
    const row = [];
    lastCategory = null;

    products.forEach(product => {
        if (product.category !== lastCategory) {
            row.push(<ProductCategoryRow category={product.category} key={product.category})
        }
    });
}

function SearchBar() {}
