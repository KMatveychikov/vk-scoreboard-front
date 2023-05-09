import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {RegisterRequest} from "../models/response/RegisterRequest";
import {ITask} from "../models/ITask";
import {TaskCategory} from "../models/TaskCategory";

export default class TaskService {
    // static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    //     return $api.post<AuthResponse>('/auth/login', {email, password})
    // }
    //
    // static async registration(name: string, email: string, password: string): Promise<AxiosResponse<RegisterRequest>> {
    //     return $api.post<RegisterRequest>('/auth/register', {name, email, password})
    // }

    static async addTask(title: string, text: string, category: TaskCategory, score: number): Promise<AxiosResponse<ITask>> {
        return $api.post<ITask>('/task/add', {title, text, category, score})
    }

    static async getAllTasks(): Promise<AxiosResponse<ITask[]>> {
        return $api.get<ITask[]>('/task/all')
    }
    static async getUncompletedTasks(userId: string): Promise<AxiosResponse<ITask[]>> {
        return $api.get<ITask[]>('/task/uncompleted?userId='+userId)
    }
    static async completeTask(taskId: string){
        return $api.post('/task/complete?taskId='+taskId)
    }
}