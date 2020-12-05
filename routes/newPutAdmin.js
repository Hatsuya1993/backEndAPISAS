const express = require('express')
const router = express.Router()
const errorCheck = require('./errorCheck')
const teacherPut = require('./teacher/teacherPut')
const studentsPut = require('./students/studentsPut')
const classPut = require('./class/classPut')
const subjectPut = require('./subject/subjectPut')


router.put('/api/register', (req, res) => {
    switch ((Object.keys(req.body))[0]) {
        // Update teacher data 
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

                teacherPut(idTeacher, name, email, function (returnValue) {
                    res.send(returnValue)
                })

                // Catch for any syntax error under the try block
            } catch (err) {
                res.send({
                    status: 400,
                    message: "Check syntax under the try block (line 14)"
                })
            }
            break
            // Update students data 
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

                studentsPut(idTeacher, name, email, function (returnValue) {
                    res.send(returnValue)
                })

                // Catch for any syntax error under the try block
            } catch (err) {
                res.send({
                    status: 400,
                    message: "Check syntax under the try block (line 40)"
                })
            }
            break
            // Update subject data 
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

                subjectPut(idTeacher, name, subjectCode, function (returnValue) {
                    res.send(returnValue)
                })

                // Catch for any syntax error under the try block
            } catch (err) {
                res.send({
                    status: 400,
                    message: "Check syntax under the try block (line 66)"
                })
            }
            break
            // Update class data 
        case "class":
            try {
                let {
                    idTeacher,
                    classCode,
                    name
                } = req.body.class

                // Check if all values are passed to the input 
                if (errorCheck(idTeacher, name, classCode, 'idTeacher', 'name', 'classCode')) {
                    return res.send(errorCheck(idTeacher, name, classCode, 'idTeacher', 'name', 'classCode'))
                }

                classPut(idTeacher, name, classCode, function (returnValue) {
                    res.send(returnValue)
                })

                // Catch for any syntax error under the try block
            } catch (err) {
                res.send({
                    status: 400,
                    message: "Check syntax under the try block (line 92)"
                })
            }
            break
            // Input data is not related to (teacher, students, subject or class)
        default:
            res.send({
                status: 400,
                message: "Invalid data (Neither teacher, students, subject or class)"
            })
    }
})

module.exports = router