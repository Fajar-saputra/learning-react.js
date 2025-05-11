import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
import DarkMode from "./components/DarkMode";
import Header from "./components/Header";
import Form from "./components/Input/Form";
import InputFrom from "./components/InputFrom";
import Profile from "./components/Profile";
import StudentItem from "./components/propsAndMapping/StudentItem";
import HiddenContent from "./components/ShowContent";

function App() {
    function handleClick() {
        return alert("You click me");
    }

    const students = [
        { id: 1, nama: "Fajar", jurusan: "Informatika" },
        { id: 2, nama: "Lia", jurusan: "Sistem Informasi" },
        { id: 3, nama: "Rizky", jurusan: "Teknik Komputer" },
    ];

    return (
        <>
            <Header />
            <Counter />
            <Button text="Click Me!!!" onClick={handleClick} />
            <DarkMode />
            <HiddenContent />
            <InputFrom />
            <Form />
            <Profile name={"Dimas"} bio={"Wirausahan"} umur={"21 tahun"} />
            <Profile name={"Elvin"} bio={"Mekanik"} umur={"19 tahun"} />
            {students.map((student) => (
                <StudentItem key={student.id} nama={student.nama} jurusan={student.jurusan} />
            ))}
        </>
    );
}

export default App;
