const userSchema = require('../models/user') 

class UserService{
    async create(User) {
            const createdUser = await userSchema.create(User);
            return createdUser;
    }
}


module.exports = new UserService();