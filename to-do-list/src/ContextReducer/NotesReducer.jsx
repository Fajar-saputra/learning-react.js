let id = 0;

export default function NotesReducer(notes, action) {
    switch (action.type) {
        case "ADD_NOTE":
            return [...notes, {id: id++, title: action.text, done: false}]
        default:
            notes;
    }
}