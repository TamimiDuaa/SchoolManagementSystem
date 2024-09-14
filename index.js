require('dotenv').config();
const express = require('express');
const app = express();

const connectToDB = require('./config/conn');
connectToDB();

const PORT =process.env.PORT || 3000;

const studentRoute = require('./routes/studentRoute');

app.get("/",(req,res)=>{
    res.send('Hello World')
})

app.use('/student',studentRoute);

app.listen(PORT, ()=>{
    console.log(`your SERVER started on http://localhost:${PORT}`);
})