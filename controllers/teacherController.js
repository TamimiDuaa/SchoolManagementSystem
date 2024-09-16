const teacherModel = require('../models/teacherModel');
const express = require('express');
const app = express();

app.use(express.json());

exports.findAllTeachers=async (req,res)=>{
    const teachers = await teacherModel.find()
                                        .populate("class_id");
    console.log(teachers);
    res.render('teacherTable',{ teachers})
}

exports.findByName=async (req,res)=>{
   
    const teacherName = req.query.name ||'';
    console.log(teacherName);

}
exports.findTeacherById=async (req,res)=>{
    const teacher = await teacherModel.findById(req.params.id+"");
    
    res.json({teacher:teacher})
}
exports.addNewTeacher=async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    const teacher = await teacherModel.create({name:name, email:email, phone:phone});
    
    res.json({teacher:teacher})
}
exports.updateTeacher = async (req,res)=>{
    const id = req.params.id;
    const {name,email,phone} = req.body;

    const teachers = await teacherModel.findByIdAndUpdate(id
        ,{
           name:name,email:email,phone:phone
        });

        res.json({teachers:teachers})
}
exports.deleteTeacher = async (req,res)=>{
    const teacherid = req.params.id;
    const teachers = await teacherModel.findByIdAndDelete(teacherid);
    res.json({success: "Its Deleted"})

}