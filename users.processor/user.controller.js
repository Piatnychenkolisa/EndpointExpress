const { userService } = require('./user.service');
const {Router} = require('express');
const router = Router();


router.post('/users', async function (req, res) {
    try{
        const user = await userService.create({ firstName: req.body.firstName, lastName: req.body.lastName, 
            email: req.body.email, phone: req.body.phone });
        res.status(201).json(user);
    } catch(e) {
        console.log(e); 
        if(e.message == "This email is already in use"){
            res.status(403).json({Error: "This email is already in use"});
        }
        if(e.message == "This phone is already in use"){
            res.status(403).json({Error: "This phone is already in use"});
        }
        res.status(500).json({Error: "Server error"});
    }
});

module.exports = {router};