import { redirect } from "next/navigation";

import Tasks from "@/components/Tasks";
import AddTask from "@/components/AddTask";
import DashboardUserProfile from "@/components/DashboardUserProfile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function DashboardPage() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        return redirect("/");
    }

    return (
        <main className="bg-background text-foreground">
            <div className="mx-auto max-w-4xl px-6 py-10">
                <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold">Dashboard</h1>
                        <p className="mt-2 text-sm text-foreground/65">Manage your tasks in one simple place.</p>
                    </div>
                    <DashboardUserProfile user={session.user} />
                </header>
                <AddTask />
                <Tasks />
            </div>
        </main>
    );
}
