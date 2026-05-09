import Tasks from "@/components/Tasks";
import AddTask from "@/components/AddTask";
import UserProfile from "@/components/UserProfile";
import UserProfileSkeleton from "@/components/UserProfileSkeleton";
import TasksSkeleton from "@/components/TasksSkeleton";
import { Suspense } from "react";

export default function DashboardPage() {
    return (
        <main className="bg-background text-foreground">
            <div className="mx-auto max-w-4xl px-6 py-10">
                <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold">Dashboard</h1>
                        <p className="mt-2 text-sm text-foreground/65">Manage your tasks in one simple place.</p>
                    </div>
                    <Suspense fallback={<UserProfileSkeleton />}>
                        <UserProfile />
                    </Suspense>
                </header>
                <AddTask />
                <Suspense fallback={<TasksSkeleton />}>
                    <Tasks />
                </Suspense>
            </div>
        </main>
    );
}
