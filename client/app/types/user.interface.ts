import { IUser } from "./auth.interface";

export interface IAuthFormData extends Pick<IUser, 'email' | 'password'>