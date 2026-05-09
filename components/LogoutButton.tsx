"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = async () => {
        await authClient.signOut();
        toast.success("Logged out successfully");
        router.push("/");
        router.refresh();
    };

    return (
        <Button type="button" variant="outline" size="sm" className="rounded-md" onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default LogoutButton;
