import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { NotesProvider } from "./NotesContext";

export default function NoteAppReducer() {
    return (
        <NotesProvider>
            <h2>Ini contoh reducer and context</h2>
            <NoteForm />
            <NoteList />
        </NotesProvider>
    );
}
