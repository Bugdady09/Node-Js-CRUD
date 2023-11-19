const express = require('express')
const Student = require('../models/studentModel')
const router = express.Router()

router.get('/hello', (req, res)=> {
    console.log('Hello World!')
    res.send('Hello World!')
})

router.post('/save', (req, res) => {
    //console.log(req.body);

    const student = new Student({
        name: req.body.name,
        marks: Number(req.body.marks)
    })

    console.log('student: ', student)
    try {
        student.save();
    } catch (error) {
        res.status(400).json({message: error.message})
    }

    res.status(201).json(student);
})

router.get('/all', async (req, res) => {
    const student = await Student.find();
    console.log('all students: ',student)
    res.status(200).json(student);
    //res.body(student)
})

module.exports= router