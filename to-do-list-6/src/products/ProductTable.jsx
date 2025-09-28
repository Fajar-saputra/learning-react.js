function SearchBar({filterText, setFilterText}) {
    return (
        <form action="">
            <input type="text" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
        </form>
    )
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name : <p style={{color: "red"}}>{ product.name }</p>
    return ( 
        <tr>
    <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}


export default function ProductTable() {
    return (
        <h2>Ini product list</h2>
    )
}