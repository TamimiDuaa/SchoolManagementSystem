require('dotenv').config();
const express = require('express');
const app = express();

const connectToDB = require('./config/conn');
connectToDB();

const PORT =process.env.PORT || 3000;

const studentRoute = require('./routes/studentRoute');
const teacherRoute = require('./routes/teacherRoute');

app.set('view engine', 'ejs');

app.use(express.json());

// Static files
app.use(express.static('public'));


app.get("/",(req,res)=>{
    res.render('homepage.ejs');
})

app.use('/student',studentRoute);
app.use('/teacher',teacherRoute);


app.listen(PORT, ()=>{
    console.log(`your SERVER started on http://localhost:${PORT}`);
})