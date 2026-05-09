import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { Task } from "@/models/Task";
import { connectDB } from "@/lib/db";
import { headers } from "next/headers";
import { createTaskSchema } from "@/schemas/task.schema";
import { flattenError } from "zod";

// POST => /api/tasks => Create a new task
export const POST = async (request: NextRequest) => {
    try {
        await connectDB();

        const session = await auth.api.getSession({
            headers: await headers(),
        });
        if (!session || !session.user) {
            return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
        }

        const body = await request.json();
        const result = createTaskSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({ success: false, error: flattenError(result.error).fieldErrors }, { status: 400 });
        }

        const { title, description } = result.data;

        const task = await Task.create({
            owner: session.user.id,
            title,
            description,
            isCompleted: false,
        });

        return NextResponse.json({ success: true, task }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Failed to add task" }, { status: 500 });
    }
};
