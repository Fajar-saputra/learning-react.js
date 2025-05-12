export default function Admin({ isAdmin }) {
    return <h1> {isAdmin ? "Halo, Admin" : "Halo, user"}</h1>;
}
