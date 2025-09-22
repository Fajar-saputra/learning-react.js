import "./App.css";
import ProductTable from "./components/FilterableProductTable";
import Basic from "./contextBasic/Basic";
import ProfileBasic from "./contextBasic/ProfileBasic";
import ProfileMedium from "./contextMedium/ProfileMedium";
import ProfileSiswaSMA from "./contextMedium/ProfileSiswaSMA";

import Notes from "./notes/Notes";
import ListPahlawan from "./pahlawanNasional/ListPahlawan";
import NoteAppReducer from "./reducerNotes/NoteAppReducer";
import NoteForm from "./reducerNotes/NoteForm";
import TodoApp from "./TodoApp";

function App() {
    return (
        <>
            {/* <ProductTable /> */}
            {/* <Notes /> */}
            {/* <ReducerNotes /> */}
            {/* <Basic /> */}
            {/* <ProfileBasic /> */}
            {/* <ProfileMedium /> */}
            {/* <ProfileSiswaSMA /> */}
            {/* <NoteAppReducer /> */}
            {/* <TodoApp/> */}
            {/* <NoteAppReducer /> */}
            <ListPahlawan />
        </>
    );
}

export default App;
