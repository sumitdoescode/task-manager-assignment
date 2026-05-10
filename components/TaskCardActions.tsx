"use client";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const TaskCardActions = ({ id }: { id: string }) => {
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [isToggling, setIsToggling] = useState<boolean>(false);
    const router = useRouter();
    const deleteTask = async () => {
        try {
            setIsDeleting(true);
            await axios.delete(`/api/tasks/${id}`);
            toast.success("Task Deleted Successfully");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Failed to Delete Task");
        } finally {
            setIsDeleting(false);
        }
    };
    const toggleTask = async () => {
        try {
            setIsToggling(true);
            await axios.patch(`/api/tasks/${id}`);
            toast.success("Task Toggled Successfully");
            router.refresh();
        } catch (error) {
            console.error(error);
            toast.error("Failed to Toggle Task");
        } finally {
            setIsToggling(false);
        }
    };
    return (
        <div className="flex shrink-0 gap-2">
            <Button type="button" variant="outline" className="rounded-md px-3 py-2 text-sm" onClick={toggleTask} disabled={isDeleting || isToggling}>
                {isToggling ? <Loader2 /> : "Toggle"}
            </Button>
            <AlertDialog>
                <AlertDialogTrigger
                    render={
                        <Button variant="destructive" className="rounded-md px-3 py-2 text-sm" disabled={isDeleting || isToggling}>
                            <Trash2 className="size-4" /> Delete
                        </Button>
                    }
                ></AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>This will permanently delete your task and remove it from your list. This action cannot be undone.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={deleteTask} variant={"destructive"} disabled={isDeleting || isToggling}>
                            {isDeleting ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" /> Deleting...
                                </>
                            ) : (
                                "Delete"
                            )}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
};

export default TaskCardActions;
