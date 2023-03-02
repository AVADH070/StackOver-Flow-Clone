const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);
const app = express();
const cors = require('cors')


const url = 'mongodb+srv://StackOverFlow:qwaszx@stack-overflow-clon.uggidtg.mongodb.net/stack?retryWrites=true&w=majority'

// Import file
const connectDB = require('./DB/connect.js');
const userRouter = require('./routes/users.js')
const questionRouter = require('./routes/questions.js')
const answerRouter = require('./routes/answer')


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())


//Router
app.use('/user', userRouter);
app.use('/question', questionRouter);
app.use('/answer', answerRouter);


const start = async () => {
    try {
        await connectDB(url)
        app.listen(5000, () => { console.log("Server has start as port 5000") })
    } catch (error) {
        console.log(error);
    }
}

start();