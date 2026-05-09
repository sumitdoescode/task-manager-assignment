import React from "react";
import { Button } from "./ui/button";

const AddTask = () => {
    return (
        <section className="mb-8 rounded-lg border border-border p-5">
            <h2 className="text-lg font-medium">Add Task</h2>

            <form className="mt-4 space-y-4">
                <div>
                    <label htmlFor="title" className="mb-2 block text-sm font-medium">
                        Title
                    </label>
                    <input id="title" type="text" placeholder="Enter task title" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none placeholder:text-foreground/40" />
                </div>

                <div>
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        Description
                    </label>
                    <textarea id="description" rows={4} placeholder="Enter task description" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none placeholder:text-foreground/40" />
                </div>

                <Button type="button" className="rounded-md px-4 py-2 text-sm font-medium">
                    Add Task
                </Button>
            </form>
        </section>
    );
};

export default AddTask;
