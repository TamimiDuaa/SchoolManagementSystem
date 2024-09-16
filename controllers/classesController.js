const classesModel = require('../models/classesModel');
const express = require('express');
const app = express();

app.use(express.json());

exports.findAllClasses=async (req,res)=>{
    const classes = await classesModel.find().populate("teacher");
    
    res.render('classesTable',{classes});
}

exports.findClassById=async (req,res)=>{
    const classes = await classesModel.findById(req.params.id+"");
    
    res.json({classes:classes})
}

exports.findByName=async (req,res)=>{
    const className = req.query.name || '';
    const classes = await classesModel.find({name:className}).populate("teacher");
    
    res.render('classesTable',{ classes:classes});

}
exports.addNewClass=async (req,res)=>{
    const subjectName = req.body.subject;
    // const days = (req.body.days).split(',');
    // const startTime = req.body.startTime;
    // const endTime = req.body.endTime;

    const subject=subjectName;

    const classes = await classesModel.create({subject:subject});
    
    res.json({classes:classes})
}
exports.updateClass = async (req,res)=>{
    const id = req.params.id;
    const {subject} = req.body;

    const classes = await classesModel.findByIdAndUpdate(id
        ,{
           subject:{
            name:subject.name,
            days:subject.days.split(','),
            start_time:subject.startTime,
            end_time:subject.endTime

           }
        });

        res.json({classes:classes})
}
exports.deleteClass = async (req,res)=>{
    const classesid = req.params.id;
    const classes = await classesModel.findByIdAndDelete(classesid)
    res.json({success: "Its Deleted"})

}