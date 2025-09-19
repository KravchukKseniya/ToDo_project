import type { Task } from "../types/Task";

export const tasks: Task[] = [
    {
        "id": 1,
        "title": "Сделать интерфейс Board",
        "description": "Создать базовую страницу с колонками To Do / In Progress / Done",
        "status": "todo",
        "priority": "high",
        "deadline": "2025-09-25",
        "createdAt": "2025-09-19"
    },
    {
        "id": 2,
        "title": "Сделать интерфейс Backlog page",
        "description": "Создать страницу со списком задач",
        "status": "todo",
        "priority": "medium",
        "deadline": "2025-09-25",
        "createdAt": "2025-09-19"
    },
    {
        "id": 3,
        "title": "Сделать интерфейс TaskCard",
        "description": "Создать форму для создания задачи",
        "status": "todo",
        "priority": "low",
        "deadline": "2025-09-25",
        "createdAt": "2025-09-19"
    }
]