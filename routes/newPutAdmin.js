const express = require('express')
const router = express.Router()
const db = require('../connection')
const errorCheck = require('./errorCheck')

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

                let sql = `UPDATE teacher SET idTeacher = ?,teacherName = ?, teacherEmail = ? WHERE idTeacher = ${idTeacher};`

                db.query(sql, [idTeacher, name, email], (err, results) => {
                    if (err) {
                        return res.send({
                            status: 400,
                            message: "Invalid syntax (line 24)"
                        })
                    }
                    return res.send({
                        status: 204,
                        message: "Updated teacher"
                    })
                })
                // Catch for any syntax error under the try block
            } catch (err) {
                res.send({
                    status: 400,
                    message: "Check syntax under the try block (line 10)"
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

                let sql = `UPDATE students SET idStudentTeacher = ?,studentName = ?, studentEmail = ? WHERE idStudentTeacher = ${idTeacher};`

                db.query(sql, [idTeacher, name, email], (err, results) => {
                    if (err) {
                        return res.send({
                            status: 400,
                            message: "Invalid syntax (line 60)"
                        })
                    }
                    return res.send({
                        status: 204,
                        message: "Updated students"
                    })
                })
                // Catch for any syntax error under the try block
            } catch (err) {
                res.send({
                    status: 400,
                    message: "Check syntax under the try block (line 46)"
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

                let sql = `UPDATE subject SET idSubjectTeacher = ?,subjectCode = ?, subjectName = ? WHERE idSubjectTeacher = ${idTeacher};`

                db.query(sql, [idTeacher, name, subjectCode], (err, results) => {
                    if (err) {
                        return res.send({
                            status: 400,
                            message: "Invalid syntax (line 97)"
                        })
                    }
                    return res.send({
                        status: 204,
                        message: "Updated subject"
                    })
                })
                // Catch for any syntax error under the try block
            } catch (err) {
                res.send({
                    status: 400,
                    message: "Check syntax under the try block (line 83)"
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

                let sql = `UPDATE class SET idClassTeacher = ?, classCode = ?,  name = ? WHERE idClassTeacher = ${idTeacher};`

                db.query(sql, [idTeacher, name, classCode], (err, results) => {
                    if (err) {
                        return res.send({
                            status: 400,
                            message: "Invalid syntax (line 134)"
                        })
                    }
                    return res.send({
                        status: 204,
                        message: "Updated class"
                    })
                })
                // Catch for any syntax error under the try block
            } catch (err) {
                res.send({
                    status: 400,
                    message: "Check syntax under the try block (line 120)"
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