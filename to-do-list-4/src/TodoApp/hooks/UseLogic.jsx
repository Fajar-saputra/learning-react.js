import { useState } from "react";

export function UseLogic() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Belajar React",
            subtasks: [
                { id: 101, text: "Pahami useState", done: false },
                { id: 102, text: "Pahami props", done: false },
            ],
        },
    ]);

    const [inputTodo, setInputTodo] = useState("");
    const [subtaskInput, setSubtaskInput] = useState({})

    const handleAddTodo = () => {
        // e.preventDefault();

        if (inputTodo.trim() === "") return;

        if (inputTodo.trim().length < 4) {
            alert("Minimal 5 karakter!");
            return;
        }

        // const duplicated = todos.filter(todo => todo.title === inputTodo.trim());

        // if (duplicated) {
        //     alert("Todo sudah ada!");
        //     return;
        // }

        const newTodo = {
            id: Date.now(),
            title: inputTodo.trim(),
            subtasks: [],
        }

        setTodos(newTodo);
        setInputTodo("")
    }

    const handleAddSubtask = (todoId, subTaskText) => {
        if (subTaskText.trim().length < 4) {
            alert("Minimal 5 karakter");
            return;
        }

        const newSubtask = {
            id: Date.now(),
            text: subTaskText.trim(),
            done: false
        }


        const updateTodos = todos.map(todo => {
            if (todo.id === todoId) {
                return {
                    ...todo, 
                    subtasks: [...todo.subtasks, newSubtask]
               }
            }
            
            return todo;
        })

        setTodos(updateTodos);
        setSubtaskInput("")
    }


    return {
        todos,
        setTodos,
        inputTodo,
        setInputTodo,
        handleAddTodo,
        subtaskInput,
        setSubtaskInput,
        handleAddSubtask
    }
}
