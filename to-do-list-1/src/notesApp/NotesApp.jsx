import FormNotes from "./FormNotes";
import { NotesProvider } from "./NotesContext";
import NotesList from "./NotesList";

export default function NotesApp() {
    return (
        <NotesProvider>
            <FormNotes />
            <NotesList />
        </NotesProvider>
    );
}
