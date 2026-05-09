import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoutButton from "@/components/LogoutButton";

const DashboardUserProfile = ({ user }: { user: { name: string; image?: string | null; email: string } }) => {
    return (
        <div className="flex items-center gap-3 rounded-lg border border-border px-3 py-2">
            <Avatar className="size-10 border border-border">
                <AvatarImage src={user.image as string} alt={user.name} />
                <AvatarFallback>{user.name?.[0]?.toUpperCase()}</AvatarFallback>
            </Avatar>

            <div className="min-w-0">
                <p className="truncate text-sm font-medium">{user.name}</p>
                <p className="truncate text-xs text-foreground/60">{user.email}</p>
            </div>

            <LogoutButton />
        </div>
    );
};

export default DashboardUserProfile;
