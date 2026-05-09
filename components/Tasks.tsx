import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { headers } from "next/headers";
import { Task } from "@/models/Task";
import TaskStats from "@/components/TaskStats";
import TasksList from "@/components/TasksList";
import { ITask } from "@/types/task";

const Tasks = async () => {
    let taskList: ITask[] = [];

    await connectDB();
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!session || !session.user) {
        return redirect("/");
    }

    try {
        const tasks = await Task.find({ owner: session.user.id }).sort({ createdAt: -1 }).lean();
        taskList = tasks.map((task) => ({
            _id: String(task._id),
            title: task.title,
            description: task.description ?? "",
            isCompleted: task.isCompleted,
            createdAt: new Date(task.createdAt).toISOString(),
            updatedAt: new Date(task.updatedAt).toISOString(),
        }));
    } catch (error) {
        console.error(error);
    }

    return (
        <>
            <TaskStats tasks={taskList} />
            <TasksList tasks={taskList} />
        </>
    );
};

export default Tasks;
