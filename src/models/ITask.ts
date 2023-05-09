import {TaskCategory} from "./TaskCategory";

export interface ITask {
    _id: string,
    title: string,
    text: string,
    taskCategory: TaskCategory,
    score: number
}