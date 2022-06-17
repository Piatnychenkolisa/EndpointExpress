const userSchema = require('./user.model');

class UserService{
    async create(user) {
    
            const foundUserByEmail = await userSchema.findByProperty("email", user.email);
            const foundUserByPhone = await userSchema.findByProperty("phone", user.phone);
            if(foundUserByEmail){
                throw new Error("This email is already in use");
            }
            if(foundUserByPhone){
                throw new Error("This phone is already in use");
            }
        
            const createdUser = await userSchema.create(user);
            return createdUser;
    
        
    }
}


module.exports = { userService: new UserService() };
