const {Router} = require('express');
const router = Router();
const UserController = require('../controllers/User.controller')


router.post('/process', UserController.create)

/* router.get('/users', (req, res) => {
    res.send()
}) */

//router.post('/users/{userID}')

module.exports = router;
