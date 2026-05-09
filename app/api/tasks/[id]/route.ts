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
        const task = await Task.findById(id);
        if (!task) {
            console.error("Toggle task failed: task not found", { id, userId: session.user.id });
            return NextResponse.json({ success: false, error: "Task not found" }, { status: 404 });
        }
        if (task.owner !== session.user.id) {
            console.error("Toggle task failed: owner mismatch", { id, taskOwner: task.owner, userId: session.user.id });
            return NextResponse.json({ success: false, error: "You are not authorized to update this task" }, { status: 403 });
        }
        task.isCompleted = !task.isCompleted;
        await task.save();
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
        const task = await Task.findById(id);
        if (!task) {
            console.error("Delete task failed: task not found", { id, userId: session.user.id });
            return NextResponse.json({ success: false, error: "Task not found" }, { status: 404 });
        }
        if (task.owner !== session.user.id) {
            console.error("Delete task failed: owner mismatch", { id, taskOwner: task.owner, userId: session.user.id });
            return NextResponse.json({ success: false, error: "You are not authorized to delete this task" }, { status: 403 });
        }
        await task.deleteOne();
        return NextResponse.json({ success: true, message: "Task deleted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Failed to delete task" }, { status: 500 });
    }
};
