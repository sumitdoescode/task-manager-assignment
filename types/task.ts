export interface ITask {
    _id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
