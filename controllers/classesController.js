const classesModel = require('../models/classesModel');
const express = require('express');
const app = express();

app.use(express.json());

exports.findAllClasses=async (req,res)=>{
    const classes = await classesModel.find();
    
    res.json({classes:classes});
}
