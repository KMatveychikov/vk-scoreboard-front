import {Role} from "./Role";

export interface IUser {
    id: string;
    userName: string;
    email: string;
    isActivated: boolean;
    role: Role
}
