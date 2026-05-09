import Dashboard from "@/components/Dashboard";

export default async function DashboardPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-4xl px-6 py-10">
                <header className="mb-8">
                    <h1 className="text-3xl font-semibold">Dashboard</h1>
                    <p className="mt-2 text-sm text-foreground/65">Manage your tasks in one simple place.</p>
                </header>
                <Dashboard />
            </div>
        </main>
    );
}
