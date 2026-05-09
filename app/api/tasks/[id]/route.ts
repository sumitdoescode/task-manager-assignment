import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { Task } from "@/models/Task";
import { connectDB } from "@/lib/db";
import { headers } from "next/headers";
import { isValidObjectId } from "mongoose";

// PATCH => /api/tasks/:id => Toggle a Task By Id
export const PATCH = async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
        await connectDB();
        const session = await auth.api.getSession({
            headers: await headers(),
        });
        if (!session || !session.user) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
        }
        const { id } = await params;
        if (!id || !isValidObjectId(id)) {
            return NextResponse.json({ success: false, error: "Invalid Task ID" }, { status: 400 });
        }
        const task = await Task.findOne({ _id: id, owner: session?.user?.id });
        if (!task) {
            return NextResponse.json({ success: false, error: "Task not found or you are not authorized to update it" }, { status: 404 });
        }
        task.isCompleted = !task.isCompleted;
        // here we have to do this two db queries as we don't know the toggle value at first. if we use findByIdAndUpdate we have to use the $set operator
        return NextResponse.json({ success: true, message: task.isCompleted ? "Task completed" : "Task incomplete" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Failed to toggle task" }, { status: 500 });
    }
};

// Delete => api/tasks/:id => Delete a task by ID
export const DELETE = async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    try {
        await connectDB();
        const session = await auth.api.getSession({
            headers: await headers(),
        });
        if (!session || !session.user) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
        }
        const { id } = await params;
        if (!id || !isValidObjectId(id)) {
            return NextResponse.json({ success: false, error: "Invalid Task ID" }, { status: 400 });
        }
        // doing find and delete in one go instead of finding first and then deleting
        const task = await Task.findOneAndDelete({ _id: id, owner: session?.user?.id });
        if (!task) {
            return NextResponse.json({ success: false, error: "Task not found or you are not authorized to delete it" }, { status: 404 });
        }
        return NextResponse.json({ success: true, message: "Task deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Failed to delete task" }, { status: 500 });
    }
};
