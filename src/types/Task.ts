export interface Task {
    id: number;
    name: string;
    description?: string;
    status: "todo" | "inprogress" | "onhold" | "done";
    priority: "high" | "medium" | "low";
    deadline?: string;
    createdAt: string;
    assignee?: string;
    tags?: string[];
}