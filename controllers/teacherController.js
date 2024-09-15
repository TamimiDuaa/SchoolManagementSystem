const teacherModel = require('../models/teacherModel');
const express = require('express');
const app = express();

app.use(express.json());

exports.findAllTeachers=async (req,res)=>{
    const teachers = await teacherModel.find();
    
    res.json({teachers:teachers});
}
