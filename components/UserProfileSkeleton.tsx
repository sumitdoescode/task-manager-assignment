import { Skeleton } from "@/components/ui/skeleton";

const UserProfileSkeleton = () => {
    return (
        <div aria-hidden="true" className="flex items-center gap-3 rounded-lg border border-border px-3 py-2">
            <Skeleton className="size-10 rounded-full" />

            <div className="min-w-0 flex-1">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="mt-2 h-3 w-40" />
            </div>

            <Skeleton className="h-9 w-20" />
        </div>
    );
};

export default UserProfileSkeleton;
