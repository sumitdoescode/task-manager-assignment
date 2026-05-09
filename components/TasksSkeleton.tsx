import { Skeleton } from "@/components/ui/skeleton";

const statCards = Array.from({ length: 3 });
const taskCards = Array.from({ length: 3 });

const TasksSkeleton = () => {
    return (
        <div aria-hidden="true">
            <section className="mb-8 grid gap-3 sm:grid-cols-3">
                {statCards.map((_, index) => (
                    <div key={index} className="rounded-lg border border-border p-4">
                        <div className="flex items-center gap-2">
                            <Skeleton className="size-4 rounded-full" />
                            <Skeleton className="h-4 w-20" />
                        </div>
                        <Skeleton className="mt-2 h-8 w-14" />
                    </div>
                ))}
            </section>

            <section>
                <div className="mb-4 flex items-center justify-between">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-4 w-16" />
                </div>

                <div className="space-y-3">
                    {taskCards.map((_, index) => (
                        <div key={index} className="rounded-lg border border-border p-4">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3">
                                        <Skeleton className="h-5 w-40" />
                                        <Skeleton className="h-6 w-20 rounded-full" />
                                    </div>
                                    <Skeleton className="mt-2 h-4 w-full max-w-xl" />
                                    <Skeleton className="mt-1 h-4 w-3/4 max-w-md" />
                                    <div className="mt-3 flex gap-2">
                                        <Skeleton className="h-7 w-28 rounded-full" />
                                        <Skeleton className="h-7 w-32 rounded-full" />
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Skeleton className="size-9" />
                                    <Skeleton className="size-9" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TasksSkeleton;
