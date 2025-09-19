export interface Task {
    id: number;
    title: string;
    description?: string;
    status: "todo" | "inprogress" | "onhold" | "done";
    priority: "high" | "medium" | "low";
    deadline?: string;
    createdAt: string;
    assignee?: string;
    tags?: string[];
}