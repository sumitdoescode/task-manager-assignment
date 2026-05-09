"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const HeroButtons = () => {
    const loginWithGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/dashboard",
        });
    };

    return (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90">
                Open dashboard
            </Link>
            <button
                type="button"
                onClick={loginWithGoogle}
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
                Login with Google
            </button>
        </div>
    );
};

export default HeroButtons;
