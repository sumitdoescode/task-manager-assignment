"use client";
import { Button } from "./ui/button";
import { useState } from "react";
import axios from "axios";
import { createTaskSchema } from "@/schemas/task.schema";
import { flattenError } from "zod";
import { toast } from "sonner";

const AddTask = () => {
    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
    });
    const [error, setError] = useState<{
        title?: string[];
        description?: string[];
    }>({
        title: [],
        description: [],
    });
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // client side validation
        const result = createTaskSchema.safeParse(taskData);
        if (!result.success) {
            setError(flattenError(result.error).fieldErrors);
            return;
        }

        const task = result.data;
        setLoading(true);
        try {
            await axios.post("/api/tasks", task);

            setTaskData({
                title: "",
                description: "",
            });
            toast.success("Task Added Successfully");
        } catch (error) {
            console.error(error);
            toast.error("Failed to Add Task");
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="mb-8 rounded-lg border border-border p-5">
            <h2 className="text-lg font-medium">Add Task</h2>

            <form className="mt-4 space-y-4" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="title" className="mb-2 block text-sm font-medium">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter task title"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none placeholder:text-foreground/40"
                        value={taskData.title}
                        onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
                    />
                    {error.title &&
                        error.title.map((err, idx) => (
                            <p key={idx} className="mt-1 text-xs text-red-500">
                                {err}
                            </p>
                        ))}
                </div>

                <div>
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        Description
                    </label>
                    <textarea
                        id="description"
                        rows={4}
                        placeholder="Enter task description"
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none placeholder:text-foreground/40"
                        value={taskData.description}
                        onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
                    />
                    {error.description &&
                        error.description.map((err, idx) => (
                            <p key={idx} className="mt-1 text-xs text-red-500">
                                {err}
                            </p>
                        ))}
                </div>

                <Button type="submit" className="rounded-md px-4 py-2 text-sm font-medium" disabled={loading || !taskData.title}>
                    {loading ? "Adding..." : "Add Task"}
                </Button>
            </form>
        </section>
    );
};

export default AddTask;
