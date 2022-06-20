import { usersRepository } from "./user.model";
import { User } from "./interfaces/user.interface";
import { IUserService } from "./interfaces/user.service.interface";

class UserService implements IUserService {
    async create(user: User): Promise<User> {
        const foundUserByEmail = await usersRepository.findByProperty({ email: user.email });
        if (foundUserByEmail) {
            throw new Error("This email is already in use");
        }
        const foundUserByPhone = await usersRepository.findByProperty({ phone: user.phone });
        if (foundUserByPhone) {
            throw new Error("This phone is already in use");
        }
        const createdUser = await usersRepository.create(user);
        return createdUser;
    }
}

export const userService = new UserService();