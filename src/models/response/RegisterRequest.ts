import {Role} from "../Role";

export interface RegisterRequest {
   name: string
   email: string
   password: string
   role: Role
}