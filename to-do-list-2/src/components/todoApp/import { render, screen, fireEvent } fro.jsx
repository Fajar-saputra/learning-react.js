import { render, screen, fireEvent } from "@testing-library/react";
import LogicTodo from "./todo";

// src/components/todoApp/todo.test.jsx

describe("LogicTodo Component", () => {
    test("renders initial todos", () => {
        render(<LogicTodo />);
        const todoItems = screen.getAllByRole("listitem");
        expect(todoItems.length).toBe(5);
        todoItems.forEach(item => {
            expect(item).toHaveTextContent("Belajar React Intermedian");
        });
    });

    test("can add a new todo", () => {
        render(<LogicTodo />);
        const input = screen.getByPlaceholderText("Enter Todo...");
        const button = screen.getByRole("button");

        fireEvent.change(input, { target: { value: "Belajar Testing" } });
        fireEvent.click(button);

        expect(screen.getByText("Belajar Testing")).toBeInTheDocument();
        const todoItems = screen.getAllByRole("listitem");
        expect(todoItems.length).toBe(6);
    });

    test("does not add empty todo", () => {
        render(<LogicTodo />);
        const input = screen.getByPlaceholderText("Enter Todo...");
        const button = screen.getByRole("button");

        fireEvent.change(input, { target: { value: "   " } });
        fireEvent.click(button);

        const todoItems = screen.getAllByRole("listitem");
        expect(todoItems.length).toBe(5);
    });
});