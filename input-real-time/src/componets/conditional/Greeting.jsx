export default function Greeting({ isLoggedIn }) {
    return <p>{ isLoggedIn? "Selamat datang!" : "Silakan login."}</p>
}