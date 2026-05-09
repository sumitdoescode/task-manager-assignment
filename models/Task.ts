import { model, models, Schema } from "mongoose";

const taskSchema = new Schema(
    {
        owner: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        isCompleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);

export const Task = models.Task || model("Task", taskSchema);
