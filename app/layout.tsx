import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Link from "next/link";

import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Task Manager",
    description: "A simple task manager to plan, track, and finish your work.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}>
            <body className="min-h-full flex flex-col">
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    <div className="flex min-h-full flex-col">
                        <div className="flex-1">{children}</div>
                        <footer className="mx-auto w-full max-w-6xl px-6 pb-8 sm:px-8">
                            <p className="text-center text-sm text-foreground/60">
                                Built by{" "}
                                <Link
                                    href="https://sumitdoescode.me"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-foreground"
                                >
                                    sumitdoescode
                                </Link>
                            </p>
                        </footer>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
