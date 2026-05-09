import type { ITask } from "@/types/task";
import TaskCard from "./TaskCard";

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
                    <TaskCard key={task._id} {...task} />
                ))}
            </div>
        </section>
    );
};

export default TasksList;
