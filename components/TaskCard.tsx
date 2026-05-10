import { Badge } from "./ui/badge";
import { Clock3, RefreshCw } from "lucide-react";
import type { ITask } from "@/types/task";
import dayjs from "dayjs";
import TaskCardActions from "./TaskCardActions";

const TaskCard = ({ _id, title, description, isCompleted, createdAt, updatedAt }: ITask) => {
    const createdAtLabel = dayjs(createdAt).format("DD MMM, hh:mm A");
    const updatedAtLabel = dayjs(updatedAt).format("DD MMM, hh:mm A");

    return (
        <div className="rounded-lg border border-border p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                        <h3 className={`text-base font-medium ${isCompleted ? "line-through text-foreground/50" : ""}`}>{title}</h3>
                        <Badge
                            variant={isCompleted ? "secondary" : "outline"}
                            className={isCompleted ? "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-300" : "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-300"}
                        >
                            {isCompleted ? "Completed" : "Pending"}
                        </Badge>
                    </div>
                    <p className="mt-1 text-sm text-foreground/65">{description}</p>
                    <div className="mt-3 flex flex-col gap-2 text-xs text-foreground/60 sm:flex-row sm:flex-wrap">
                        <span title={createdAtLabel} className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1">
                            <Clock3 className="size-3.5" />
                            Created {createdAtLabel}
                        </span>
                        <span title={updatedAtLabel} className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1">
                            <RefreshCw className="size-3.5" />
                            Updated {updatedAtLabel}
                        </span>
                    </div>
                </div>

                <TaskCardActions id={_id} />
            </div>
        </div>
    );
};

export default TaskCard;
