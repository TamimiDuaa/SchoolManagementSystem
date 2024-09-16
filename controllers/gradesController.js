const gradesModel = require('../models/gradesModel');
const express = require('express');
const app = express();

app.use(express.json());

exports.findAllGrades=async (req,res)=>{
    const grades = await gradesModel.find();
    
    res.json({grades:grades});
}
