const express = require('express')
const router = express.Router()
const teacher = require('./teacher/teacherPost')
const students = require('./students/studentsPost')
const subject = require('./subject/subjectPost')
const classs = require('./class/classPost')
const errorCheck = require('./errorCheck')

// POST data into the required fields

router.post('/api/register', (req, res) => {

    switch ((Object.keys(req.body))[0]) {
        // Post teacher data 
        case "teacher":
            try {

                let {
                    idTeacher,
                    name,
                    email
                } = req.body.teacher

                // Check if all values are passed to the input 
                if (errorCheck(idTeacher, name, email, 'idTeacher', 'name', 'email')) {
                    return res.send(errorCheck(idTeacher, name, email, 'idTeacher', 'name', 'email'))
                }

                teacher(idTeacher, name, email, function (returnValue) {
                    res.send(returnValue)
                })


                // Catch for any syntax error under the try block
            } catch (err) {
                res.send({
                    status: 400,
                    message: "Check syntax under the try block (line 16)",
                    info: err
                })
            }
            break
            // Post students data 
        case "students":
            try {
                let {
                    idTeacher,
                    name,
                    email
                } = req.body.students

                // Check if all values are passed to the input 
                if (errorCheck(idTeacher, name, email, 'idTeacher', 'name', 'email')) {
                    return res.send(errorCheck(idTeacher, name, email, 'idTeacher', 'name', 'email'))
                }

                students(idTeacher, name, email, function (returnValue) {
                    res.send(returnValue)
                })

                // Catch for any syntax error under the try block
            } catch (err) {
                res.send({
                    status: 400,
                    message: "Check syntax under the try block (line 45)",
                    info: err
                })
            }
            break
            // Post subject data 
        case "subject":
            try {
                let {
                    idTeacher,
                    subjectCode,
                    name
                } = req.body.subject

                // Check if all values are passed to the input 
                if (errorCheck(idTeacher, name, subjectCode, 'idTeacher', 'name', 'subjectCode')) {
                    return res.send(errorCheck(idTeacher, name, subjectCode, 'idTeacher', 'name', 'subjectCode'))
                }

                subject(idTeacher, name, subjectCode, function (returnValue) {
                    res.send(returnValue)
                })

                // Catch for any syntax error under the try block
            } catch (err) {
                res.send({
                    status: 400,
                    message: "Check syntax under the try block (line 72)"
                })
            }
            break
            // Post class data 
        case "class":
            try {
                let {
                    idTeacher,
                    classCode,
                    name
                } = req.body.class

                // Check if all values are passed to the input 
                if (errorCheck(idTeacher, classCode, name, 'idTeacher', 'name', 'classCode')) {
                    return res.send(errorCheck(idTeacher, name, classCode, 'idTeacher', 'name', 'classCode'))
                }

                classs(idTeacher, name, classCode, function (returnValue) {
                    res.send(returnValue)
                })

                // Catch for any syntax error under the try block
            } catch (err) {
                res.send({
                    status: 400,
                    message: "Check syntax under the try block (line 98)"
                })
            }
            break
        default:
            // Input data is not related to (teacher, students, subject or class)
            res.send({
                status: 400,
                message: "Invalid data (Neither teacher, students, subject or class)"
            })
    }

})

module.exports = router