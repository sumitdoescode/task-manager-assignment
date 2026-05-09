import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock3, RefreshCw, Trash2 } from "lucide-react";
import type { ITask } from "@/types/task";

dayjs.extend(relativeTime);

const TasksList = ({ tasks }: { tasks: ITask[] }) => {
    if (tasks.length === 0) {
        return <p className="text-center text-foreground/60">No tasks yet. Add one above!</p>;
    }

    return (
        <section>
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-medium">All Tasks</h2>
                <span className="text-sm text-foreground/60">{tasks.length} tasks</span>
            </div>

            <div className="space-y-3">
                {tasks.map((task: ITask) => (
                    <div key={task._id} className="rounded-lg border border-border p-4">
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
                                <div className="mt-3 flex flex-wrap gap-2 text-xs text-foreground/60">
                                    <span title={dayjs(task.createdAt).format("DD MMM YYYY, hh:mm A")} className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1">
                                        <Clock3 className="size-3.5" />
                                        Added {dayjs(task.createdAt).fromNow()}
                                    </span>
                                    <span title={dayjs(task.updatedAt).format("DD MMM YYYY, hh:mm A")} className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1">
                                        <RefreshCw className="size-3.5" />
                                        Updated {dayjs(task.updatedAt).fromNow()}
                                    </span>
                                </div>
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
