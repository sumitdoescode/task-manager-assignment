"use client";

import { authClient } from "@/lib/auth-client";

const HeroButtons = () => {
    const loginWithGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/dashboard",
        });
    };

    return (
        <div className="mt-8 flex justify-center">
            <button
                type="button"
                onClick={loginWithGoogle}
                className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
                Login with Google
            </button>
        </div>
    );
};

export default HeroButtons;
