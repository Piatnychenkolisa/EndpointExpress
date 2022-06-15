const UserService = require('../services/User.service')

class UserController{
    async create(req, res) {
        try{
            const User = await UserService.create(req.body);
            res.json(User);
        } catch(e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new UserController();
