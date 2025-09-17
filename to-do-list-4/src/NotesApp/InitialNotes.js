import { v4 } from "uuid";


export const InitialNotes = [
    {
        id: v4(),
        title: "Belajar React Dasar",
        done: false,
        tasks: [
            {
                id: v4(),
                title: "Belajar React Dasar",
                done: false,
                sub: [
                    { id: v4(), title: "Belajar React level 1" },
                    { id: v4(), title: "Belajar React level 1" },
                    { id: v4(), title: "Belajar React level 1" },
                ],
            },
            {
                id: v4(),
                title: "Belajar HMTL Dasar",
                done: false,
                sub: [
                    { id: v4(), title: "Belajar HMTL level 1" },
                    { id: v4(), title: "Belajar HMTL level 1" },
                    { id: v4(), title: "Belajar HMTL level 1" },
                ],
            },
            {
                id: v4(),
                title: "Belajar Node Dasar",
                done: false,
                sub: [
                    { id: v4(), title: "Belajar Node level 1" },
                    { id: v4(), title: "Belajar Node level 1" },
                    { id: v4(), title: "Belajar Node level 1" },
                ],
            },
        ],
    },
    {
        id: v4(),
        title: "Belajar React Dasar",
        done: false,
        tasks: [
            {
                id: v4(),
                title: "Belajar React Dasar",
                done: false,
                sub: [
                    { id: v4(), title: "Belajar React level 1" },
                    { id: v4(), title: "Belajar React level 1" },
                    { id: v4(), title: "Belajar React level 1" },
                ],
            },
            {
                id: v4(),
                title: "Belajar HMTL Dasar",
                done: true,
                level1: [
                    { id: v4(), title: "Belajar HMTL level 1" },
                    { id: v4(), title: "Belajar HMTL level 1" },
                    { id: v4(), title: "Belajar HMTL level 1" },
                ],
            },
            {
                id: v4(),
                title: "Belajar Node Dasar",
                done: false,
                level1: [
                    { id: v4(), title: "Belajar Node level 1" },
                    { id: v4(), title: "Belajar Node level 1" },
                    { id: v4(), title: "Belajar Node level 1" },
                ],
            },
        ],
    },
    {
        id: v4(),
        title: "Belajar React Dasar",
        done: false,
        tasks: [
            {
                id: v4(),
                title: "Belajar React Dasar",
                done: false,
                sub: [
                    { id: v4(), title: "Belajar React level 1" },
                    { id: v4(), title: "Belajar React level 1" },
                    { id: v4(), title: "Belajar React level 1" },
                ],
            },
            {
                id: v4(),
                title: "Belajar HMTL Dasar",
                done: false,
                level1: [
                    { id: v4(), title: "Belajar HMTL level 1" },
                    { id: v4(), title: "Belajar HMTL level 1" },
                    { id: v4(), title: "Belajar HMTL level 1" },
                ],
            },
            {
                id: v4(),
                title: "Belajar Node Dasar",
                done: false,
                level1: [
                    { id: v4(), title: "Belajar Node level 1" },
                    { id: v4(), title: "Belajar Node level 1" },
                    { id: v4(), title: "Belajar Node level 1" },
                ],
            },
        ],
    },
];