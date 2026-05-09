import { CheckCircle2, Clock3, ListTodo } from "lucide-react";

const TaskStats = () => {
    return (
        <section className="mb-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-border p-4">
                <div className="flex items-center gap-2 text-foreground/60">
                    <ListTodo className="size-4" />
                    <p className="text-sm">Total Tasks</p>
                </div>
                <p className="mt-2 text-2xl font-semibold">10</p>
            </div>
            <div className="rounded-lg border border-border p-4">
                <div className="flex items-center gap-2 text-foreground/60">
                    <Clock3 className="size-4" />
                    <p className="text-sm">Pending</p>
                </div>
                <p className="mt-2 text-2xl font-semibold">5</p>
            </div>
            <div className="rounded-lg border border-border p-4">
                <div className="flex items-center gap-2 text-foreground/60">
                    <CheckCircle2 className="size-4" />
                    <p className="text-sm">Completed</p>
                </div>
                <p className="mt-2 text-2xl font-semibold">5</p>
            </div>
        </section>
    );
};

export default TaskStats;
