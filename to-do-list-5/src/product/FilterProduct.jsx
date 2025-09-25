import { useState } from "react";

function ProductRow({ product }) {
    const name = product.stocked ? product.name : <span style={{ color: "red" }}>{product.name}</span>;
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th>{category}</th>
        </tr>
    );
}

function ProductTable({ products, filterText, inOnlyStock }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        }

        if (inOnlyStock && !product.stocked) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        }

        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    });

    return (
        <table border={"2"} cellPadding={"5"}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar({ filterText, setFilterText, inOnlyStock, setInOnlyStock }) {
    return (
        <form action="">
            <input type="text" placeholder="Search..." value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <label htmlFor="stock">
                <input type="checkbox" name="stock" id="stock" value={inOnlyStock} onChange={(e) => setInOnlyStock(e.target.checked)} />
                Show Only stock
            </label>
        </form>
    );
}

export default function FilterProduct({ products }) {
    const [filterText, setFilterText] = useState("");
    const [inOnlyStock, setInOnlyStock] = useState(false);
    return (
        <div>
            <h2>Product List</h2>
            <SearchBar filterText={filterText} setFilterText={setFilterText} inOnlyStock={inOnlyStock} setInOnlyStock={setInOnlyStock} />
            <ProductTable products={products} filterText={filterText} inOnlyStock={inOnlyStock} />
        </div>
    );
}
