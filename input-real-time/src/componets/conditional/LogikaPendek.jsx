export default function LogikaPendek({isLoggedIn}) {
    return (
        <>
        <h1>Hello by Logika pendek</h1>
        {isLoggedIn && <p>You are logged in!!</p>}
        </>
    )
}