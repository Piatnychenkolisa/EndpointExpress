const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const {router} = require('./users.processor/user.controller');
const Port = process.env.PORT || 3000;
const url = process.env.DB_URL;

const app = express();
app.use(express.json());
app.use( router);

async function start() {
        await mongoose.connect(url, {
            useNewUrlParser: true
        })
        app.listen(Port, () => {
            console.log('Server has been started on port ' + Port);
        })
}

start();



 
