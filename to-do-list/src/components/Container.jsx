export default function Container({ children }) {
    
    return (
        <div style={{backgroundColor:"rgb(255, 193, 224)",color:"black", padding:"1rem 2rem", boxShadow:"0 0 1rem rgba(0,0,0,.3)"}}>
            <h1>Ini container</h1>
            {children}
            <footer>
                Ini footer dari container
            </footer>
        </div>
    )   
}