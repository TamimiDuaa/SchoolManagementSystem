const studentModel = require('../models/studentModel');
const express = require('express');
const app = express();
app.use(express.json());

exports.findAllStudent=async (req,res)=>{
    const students = await studentModel.find();
    // console.log(typeof students);
    res.render('studentsTable',{ students:students})

}
exports.findByName=async (req,res)=>{
   
    const studentName = req.query.name ||'';
    console.log(studentName);

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
    const students = await studentModel.create({name:name,gender:gender,email:email,phone:phone});
    
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