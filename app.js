const express = require('express');
const mongoose = require('mongoose');
const router = require('./routers/User.router');



const PORT = 3000;
const DB_URL = 'mongodb+srv://LisaPi:Kuruma26Pein@cluster0.rlbijhy.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use('/users', router)


async function start() {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true
        })
        app.listen(PORT, () => {
            console.log('Server has been started on port ' + PORT);
        })
    } catch (e) {
        console.log(e);
    }
}

start();



 
