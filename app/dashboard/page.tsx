import { CheckCircle2, Clock3, ListTodo, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const demoTasks = [
    {
        id: 1,
        title: "Plan Monday sprint",
        description: "Outline the first three tasks for the week.",
        isCompleted: false,
    },
    {
        id: 2,
        title: "Design landing page copy",
        description: "Keep the message short and clear.",
        isCompleted: true,
    },
    {
        id: 3,
        title: "Review task flow",
        description: "Check add, complete, and delete states.",
        isCompleted: false,
    },
];

export default function DashboardPage() {
    const totalTasks = demoTasks.length;
    const completedTasks = demoTasks.filter((task) => task.isCompleted).length;
    const pendingTasks = totalTasks - completedTasks;

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-4xl px-6 py-10">
                <header className="mb-8">
                    <h1 className="text-3xl font-semibold">Dashboard</h1>
                    <p className="mt-2 text-sm text-foreground/65">Manage your tasks in one simple place.</p>
                </header>

                <section className="mb-8 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-lg border border-border p-4">
                        <div className="flex items-center gap-2 text-foreground/60">
                            <ListTodo className="size-4" />
                            <p className="text-sm">Total Tasks</p>
                        </div>
                        <p className="mt-2 text-2xl font-semibold">{totalTasks}</p>
                    </div>
                    <div className="rounded-lg border border-border p-4">
                        <div className="flex items-center gap-2 text-foreground/60">
                            <Clock3 className="size-4" />
                            <p className="text-sm">Pending</p>
                        </div>
                        <p className="mt-2 text-2xl font-semibold">{pendingTasks}</p>
                    </div>
                    <div className="rounded-lg border border-border p-4">
                        <div className="flex items-center gap-2 text-foreground/60">
                            <CheckCircle2 className="size-4" />
                            <p className="text-sm">Completed</p>
                        </div>
                        <p className="mt-2 text-2xl font-semibold">{completedTasks}</p>
                    </div>
                </section>

                <section className="mb-8 rounded-lg border border-border p-5">
                    <h2 className="text-lg font-medium">Add Task</h2>

                    <form className="mt-4 space-y-4">
                        <div>
                            <label htmlFor="title" className="mb-2 block text-sm font-medium">
                                Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                placeholder="Enter task title"
                                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none placeholder:text-foreground/40"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="mb-2 block text-sm font-medium">
                                Description
                            </label>
                            <textarea
                                id="description"
                                rows={4}
                                placeholder="Enter task description"
                                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none placeholder:text-foreground/40"
                            />
                        </div>

                        <Button type="button" className="rounded-md px-4 py-2 text-sm font-medium">
                            Add Task
                        </Button>
                    </form>
                </section>

                <section>
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-medium">All Tasks</h2>
                        <span className="text-sm text-foreground/60">{demoTasks.length} tasks</span>
                    </div>

                    <div className="space-y-3">
                        {demoTasks.map((task) => (
                            <div key={task.id} className="rounded-lg border border-border p-4">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className={`text-base font-medium ${task.isCompleted ? "line-through text-foreground/50" : ""}`}>
                                                {task.title}
                                            </h3>
                                            <Badge
                                                variant={task.isCompleted ? "secondary" : "outline"}
                                                className={
                                                    task.isCompleted
                                                        ? "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-300"
                                                        : "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300"
                                                }
                                            >
                                                {task.isCompleted ? "Completed" : "Pending"}
                                            </Badge>
                                        </div>
                                        <p className="mt-1 text-sm text-foreground/65">{task.description}</p>
                                    </div>

                                    <div className="flex shrink-0 gap-2">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="rounded-md px-3 py-2 text-sm"
                                        >
                                            Toggle
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            className="rounded-md px-3 py-2 text-sm"
                                        >
                                            <Trash2 className="size-4" />
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
