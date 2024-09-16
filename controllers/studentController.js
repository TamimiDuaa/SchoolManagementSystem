const studentModel = require('../models/studentModel');
const classesModel = require('../models/classesModel');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());

exports.findAllStudent=async (req,res)=>{
    const students = await studentModel.find();
    // console.log(typeof students);
    res.render('studentsTable',{ students:students})

}
exports.renderForm = async (req,res)=>{
    const classes = await classesModel.find();
    res.render('addStudent',{ classes:classes})

}
exports.findByStudentName=async (req,res)=>{
   
    const studentName = req.query.name || '';
    const students = await studentModel.find({name:studentName});
    
    res.render('studentsTable',{ students:students})

}
exports.findStudentById=async (req,res)=>{
    const students = await studentModel.findById(req.params.id+"");
    
    res.json({students:students})
}
exports.addNewStudent=async (req,res)=>{
    const name = req.body.name;
    const gender = req.body.gender;
    const email = req.body.email;
    const phone = req.body.phone;

    const class_id = req.body.classes;
    console.log(`${name},${gender},${email},${phone},${class_id}`);
    const students = await studentModel.create({name,gender,email,phone,classes:new mongoose.Types.ObjectId(class_id)});
    console.log(students);
    res.json({students:students})
}
exports.updateStudent = async (req,res)=>{
    const id = req.params.id;
    const {name,gender,email,phone} = req.body;

    const students = await studentModel.findByIdAndUpdate(id
        ,{
           name:name,gender:gender,email:email,phone:phone
        });

        res.json({students:students})
}
exports.deleteStudent = async (req,res)=>{
    const studentid = req.params.id;
    const students = await studentModel.findByIdAndDelete(studentid)
    res.json({success: "Its Deleted"})

}