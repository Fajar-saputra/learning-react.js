export const Greating = ({ isLogged, nama }) => {
    if (isLogged) {
        return <h1>Welcome back {nama} </h1>;
    } else {
        return <p>Login please!!</p>;
    }
};

export default Greating;
