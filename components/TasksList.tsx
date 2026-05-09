import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Trash2 } from "lucide-react";

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

const TasksList = () => {
    return (
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
                                    <h3 className={`text-base font-medium ${task.isCompleted ? "line-through text-foreground/50" : ""}`}>{task.title}</h3>
                                    <Badge
                                        variant={task.isCompleted ? "secondary" : "outline"}
                                        className={
                                            task.isCompleted ? "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-300" : "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300"
                                        }
                                    >
                                        {task.isCompleted ? "Completed" : "Pending"}
                                    </Badge>
                                </div>
                                <p className="mt-1 text-sm text-foreground/65">{task.description}</p>
                            </div>

                            <div className="flex shrink-0 gap-2">
                                <Button type="button" variant="outline" className="rounded-md px-3 py-2 text-sm">
                                    Toggle
                                </Button>
                                <Button type="button" variant="destructive" className="rounded-md px-3 py-2 text-sm">
                                    <Trash2 className="size-4" />
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TasksList;
