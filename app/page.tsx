import { redirect } from "next/navigation";

import HeroButtons from "@/components/HeroButtons";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const highlights = [
    {
        title: "Quick capture",
        description: "Add a task fast and keep moving.",
    },
    {
        title: "Clear focus",
        description: "See what matters today without extra noise.",
    },
    {
        title: "Simple flow",
        description: "Track work from idea to done in one place.",
    },
];

export default async function Home() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (session?.user) {
        return redirect("/dashboard");
    }

    return (
        <main className="bg-background text-foreground">
            <section className="mx-auto flex min-h-[72vh] w-full max-w-6xl items-center justify-center px-6 py-20 text-center sm:px-8">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">Keep your tasks simple, clear, and under control.</h1>
                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-foreground/70 sm:text-lg">A minimal space to plan your day, manage your work, and finish what you start.</p>
                    <HeroButtons />
                </div>
            </section>

            <section id="features" className="mx-auto grid w-full max-w-6xl gap-4 px-6 pb-8 sm:px-8 md:grid-cols-3">
                {highlights.map((item) => (
                    <article key={item.title} className="rounded-3xl border border-border/70 bg-card/85 p-6 shadow-[0_12px_40px_rgba(15,23,42,0.04)] backdrop-blur dark:shadow-[0_12px_40px_rgba(0,0,0,0.24)]">
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <p className="mt-2 text-sm leading-6 text-foreground/65">{item.description}</p>
                    </article>
                ))}
            </section>

            <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
                <div className="rounded-[2rem] border border-border/70 bg-muted/70 px-6 py-10 text-center sm:px-10">
                    <p className="text-sm uppercase tracking-[0.2em] text-foreground/55">Start small</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Build a calm workflow for your day.</h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-foreground/70 sm:text-base">No clutter, no complicated setup. Just open the app and begin.</p>
                </div>
            </section>
        </main>
    );
}
