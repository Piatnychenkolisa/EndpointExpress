import express from 'express';
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
import router from './users.processor/user.controller';
const port = process.env.PORT || 3000;
const url = process.env.DB_URL as string;

const app = express();
app.use(express.json());
app.use(router);

async function start() {
    await mongoose.connect(url)
    app.listen(port, () => {
        console.log('Server has been started on port ' + port);
    })
}

start();




