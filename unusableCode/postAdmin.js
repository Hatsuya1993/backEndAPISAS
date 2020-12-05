const express = require('express')
const router = express.Router()
const db = require('../connection')
const errorCheck = require('./errorCheck')


// POST data into the required fields

router.post('/api/register', (req, res) => {

    // Check for teacher

    if (req.body.teacher) {
        try {
            let {
                idTeacher,
                name,
                email
            } = req.body.teacher

            // Check if all values are passed to the input 
            if (errorCheck(idTeacher, name, email, 'idTeacher', 'name', 'email')){
                return res.send(errorCheck(idTeacher, name, email, 'idTeacher', 'name', 'email'))
            }

            let sql = "INSERT INTO teacher (idTeacher, teacherName, teacherEmail) VALUES (?, ?, ?)";

            db.query(sql, [idTeacher, name, email], (err, result) => {
                if (err) {
                    return res.send({
                        status: 400,
                        message: "Invalid syntax (sql) / Multiple data"
                    })
                }
                res.send({
                    status: 204,
                    message: {
                        result,
                        update: "Added teacher data"
                    }
                })
            })
            // Catch for any syntax error under the try block
        } catch (err) {
            res.send({
                status: 400,
                message: "Check syntax under the try block (line 14)"
            })
        }

        // Check for students

    } else if (req.body.students) {
        try {
            let {
                idTeacher,
                name,
                email
            } = req.body.students

            // Check if all values are passed to the input 
            if (errorCheck(idTeacher, name, email, 'idTeacher', 'name', 'email')){
                return res.send(errorCheck(idTeacher, name, email, 'idTeacher', 'name', 'email'))
            }

            let sql = "INSERT INTO students (idStudentTeacher, studentName, studentEmail) VALUES (?, ?, ?)";

            db.query(sql, [idTeacher, name, email], (err, result) => {
                if (err) {
                    return res.send({
                        status: 400,
                        message: "Invalid syntax (sql) / Multiple data"
                    })
                }
                res.send({
                    status: 204,
                    message: {
                        result,
                        update: "Added student data"
                    }
                })
            })
            // Catch for any syntax error under the try block
        } catch (err) {
            res.send({
                status: 400,
                message: "Check syntax under the try block (line 54)"
            })
        }

        // Check for subject

    } else if (req.body.subject) {
        try {
            let {
                idTeacher,
                subjectCode,
                name
            } = req.body.subject

            // Check if all values are passed to the input 
            if (errorCheck(idTeacher, name, subjectCode, 'idTeacher', 'name', 'subjectCode')){
                return res.send(errorCheck(idTeacher, name, subjectCode, 'idTeacher', 'name', 'subjectCode'))
            }

            let sql = "INSERT INTO subject (idSubjectTeacher, subjectCode, subjectName) VALUES (?, ?, ?)";

            db.query(sql, [idTeacher, subjectCode, name], (err, result) => {
                if (err) {
                    return res.send({
                        status: 400,
                        message: "Invalid syntax (sql) / Multiple data"
                    })
                }
                res.send({
                    status: 204,
                    message: {
                        result,
                        update: "Added subject data"
                    }
                })
            })
            // Catch for any syntax error under the try block
        } catch (err) {
            res.send({
                status: 400,
                message: "Check syntax under the try block (line 94)"
            })
        }

        // Check for class

    } else if (req.body.class) {
        try {
            let {
                idTeacher,
                classCode,
                name
            } = req.body.class

            // Check if all values are passed to the input 
            if (errorCheck(idTeacher, classCode, name, 'idTeacher', 'name', 'classCode')){
                return res.send(errorCheck(idTeacher, name, classCode, 'idTeacher', 'name', 'classCode'))
            }

            let sql = "INSERT INTO class (idClassTeacher, classCode, name) VALUES (?, ?, ?)";

            db.query(sql, [idTeacher, classCode, name], (err, result) => {
                if (err) {
                    return res.send({
                        status: 400,
                        message: "Invalid syntax (sql) / Multiple data"
                    })
                }
                res.send({
                    status: 204,
                    message: {
                        result,
                        update: "Added class data"
                    }
                })
            })
            // Catch for any syntax error under the try block
        } catch (err) {
            res.send({
                status: 400,
                message: "Check syntax under the try block (line 134)"
            })
        }
        // Input data is not related to (teacher, students, subject or class)
    } else {
        res.send({
            status: 400,
            message: "Invalid data (Neither teacher, students, subject or class)"
        })
    }
})

module.exports = router