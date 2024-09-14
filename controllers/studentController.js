const studentModel = require('../models/studentModel');
const express = require('express');
const app = express();
app.use(express.json());

exports.findAllStudent=async (req,res)=>{
    const students = await studentModel.find();
    
    res.json({students:students})
}
