import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../http";
import {TaskCategory} from "../models/TaskCategory";
import TaskService from "../services/TaskService";
import {ITask} from "../models/ITask";
import {store} from "../index";


export default class Store {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;
    token = '';

    tasks = [] as ITask[];

    constructor() {
        makeAutoObservable(this);
    }

    setToken(token: string) {
        this.token = token
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async login(email: string, password: string) {
        if (this.isAuth) await this.logout()
        try {
            const response = await AuthService.login(email, password);
            this.setToken(response.data.token)
            this.setUser(response.data.user);
            this.setAuth(true);

        } catch (e) {

        }
    }

    async registration(name: string, email: string, password: string) {
        try {
            const response = await AuthService.registration(name, email, password);
            console.log(response)
            this.setToken(response.data.token)
            this.setUser(response.data.user);
            this.setAuth(true);
        } catch (e) {

        }
    }

    async logout() {
        try {
            this.setToken('');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e) {

        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.token);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {

        } finally {
            this.setLoading(false);
        }
    }

    async addTask(title: string, text: string, category: TaskCategory, score: number) {
        const response = await TaskService.addTask(title, text, category, score)
        this.tasks = [...this.tasks, response.data]
    }
    async getAllTasks() {
        const response = await TaskService.getAllTasks()
        this.tasks = response.data
    }
    async getUncompletedTasks() {
        const response = await TaskService.getUncompletedTasks(this.user._id)
        this.tasks = response.data

    }
    async completeTask(taskId:string) {
        await TaskService.completeTask(taskId)
    }
}
