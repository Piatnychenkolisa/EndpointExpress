import mongoose from "mongoose";
import { User } from "./interfaces/user.interface";
import { Filter } from "./interfaces/filter.interface";

export const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false,
    match: /.+\@.+\..+/,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  blockedUsers: {
    type: [String]
  },
  appSettings: {
    type: String
  }
})

const User = mongoose.model('userSchema', userSchema);


class UsersRepository {
  async create(user: User): Promise<User> {
    if (!user.lastName || !user.firstName || !user.phone) {
      throw new Error("Mandatory fields can not be empty!");
    }
    const createdUser = await User.create(user);
    return createdUser;

  };
  findByProperty(filter: Filter): Promise<User> {
    return User.findOne(filter).exec();
  }
}

export const usersRepository = new UsersRepository();