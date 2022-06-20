import { userService } from './user.service';
import Router from 'express';
const router = Router();


router.post('/users', async function (req, res) {
    try {
        const user = await userService.create({
            firstName: req.body.firstName, lastName: req.body.lastName,
            email: req.body.email, phone: req.body.phone
        });
        res.status(201).json(user);
    } catch (e: any) {
        console.log(e);

        if (e.message === "This email is already in use" || e.message === "This phone is already in use") {
            return res.status(403).json({ Error: e.message });
        }
        res.status(500).json({ Error: "Server error" });
    }
});

export default router;