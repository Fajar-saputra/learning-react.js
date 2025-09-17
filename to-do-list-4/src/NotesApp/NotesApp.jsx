import FormNote from "./FormNote";
import { NotesProvider } from "./NotesContext";
import NotesList from "./NotesList";

export default function NotesApp() {
    return (
        <NotesProvider>
            <h2>Notes Level Nested</h2>
            <FormNote />
            <NotesList/>
        </NotesProvider>
    )
}