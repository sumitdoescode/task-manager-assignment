import Link from "next/link";
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
            <section className="mx-auto w-full max-w-6xl px-6 pt-6 sm:px-8">
                <div className="flex justify-end">
                    <Link
                        href="https://github.com/sumitdoescode/task-manager-assignment"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
                            <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.22.72-.5v-1.76c-2.94.64-3.56-1.25-3.56-1.25-.48-1.21-1.17-1.53-1.17-1.53-.96-.65.07-.64.07-.64 1.06.07 1.62 1.08 1.62 1.08.94 1.6 2.47 1.14 3.07.87.1-.68.37-1.14.67-1.4-2.35-.27-4.82-1.17-4.82-5.2 0-1.15.41-2.09 1.08-2.83-.1-.27-.47-1.37.1-2.85 0 0 .89-.28 2.92 1.08A10.2 10.2 0 0 1 12 6.67c.9 0 1.82.12 2.67.35 2.03-1.36 2.92-1.08 2.92-1.08.57 1.48.2 2.58.1 2.85.67.74 1.08 1.68 1.08 2.83 0 4.04-2.48 4.92-4.84 5.19.38.33.72.97.72 1.96v2.9c0 .28.19.6.73.5A10.5 10.5 0 0 0 12 1.5Z" />
                        </svg>
                        GitHub
                    </Link>
                </div>
            </section>
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
