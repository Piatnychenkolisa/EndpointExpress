import { User } from "./user.interface";

export interface IUserService {
    create: (user: User) => Promise<User>;
}