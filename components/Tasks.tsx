import { CheckCircle2, Clock3, ListTodo, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { headers } from "next/headers";
import { Task } from "@/models/Task";
import TaskStats from "@/components/TaskStats";
import TasksList from "@/components/TasksList";

const Tasks = async () => {
    try {
        await connectDB();
        const session = await auth.api.getSession({
            headers: await headers(),
        });
        if (!session || !session.user) {
            return redirect("/");
        }
        const tasks = await Task.find({ owner: session.user.id }).sort({ createdAt: -1 });
        console.log(tasks);
    } catch (error) {
        console.error(error);
    }
    return (
        <>
            <TaskStats />
            <TasksList />
        </>
    );
};

export default Tasks;
