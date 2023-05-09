import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import {RegisterRequest} from "../models/response/RegisterRequest";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/login', {email, password})
    }

    static async registration(name: string, email: string, password: string): Promise<AxiosResponse<RegisterRequest>> {
        return $api.post<RegisterRequest>('/auth/register', {name, email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/auth/logout')
    }

}

