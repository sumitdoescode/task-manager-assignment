import { cn } from "@/lib/utils";

function Avatar({ className, ...props }: React.ComponentProps<"div">) {
    return <div className={cn("relative flex size-10 shrink-0 overflow-hidden rounded-full", className)} {...props} />;
}

function AvatarImage({ className, alt = "", ...props }: React.ComponentProps<"img">) {
    return <img alt={alt} className={cn("aspect-square size-full object-cover", className)} {...props} />;
}

function AvatarFallback({ className, ...props }: React.ComponentProps<"div">) {
    return <div className={cn("flex size-full items-center justify-center rounded-full bg-muted text-sm font-medium text-foreground", className)} {...props} />;
}

export { Avatar, AvatarFallback, AvatarImage };
