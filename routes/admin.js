const express = require('express')
const router = express.Router()
const db = require('../connection')

// GET the report 

router.get('/api/reports/workload', (req, res) => {

    try {
        let sqlReport = 'SELECT teacher.idTeacher, teacher.teacherName, subject.subjectCode, subject.subjectName, class.idClassTeacher, teacher.idTeacher FROM teacher JOIN subject ON teacher.idTeacher = subject.idSubjectTeacher JOIN class ON teacher.idTeacher = class.idClassTeacher;'

        db.query(sqlReport, (err, results) => {
            // Check syntax for MySql (sqlReport)
            if (err) {
                return res.send({
                    status: 400,
                    message: "Invalid syntax (sqlReport)"
                })

            } else {
                let countClass = "SELECT idClassTeacher, COUNT(*) AS 'Number of class' FROM class GROUP BY idClassTeacher;"
                db.query(countClass, (err, classResults) => {
                    // Check syntax for MySql (countClass)
                    if (err) {
                        return res.send({
                            status: 400,
                            message: "Invalid syntax (countClass)"
                        })
                    } {
                        res.send({
                            status: 204,
                            message: {
                                results,
                                classResults
                            }
                        })
                    }
                })
            }
        })
        // Catch for any syntax error under the try block
    } catch (err) {
        res.send({
            status: 400,
            message: "Check syntax under the try block (line 9)"
        })
    }

})

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
            let sql = "INSERT INTO teacher (idTeacher, teacherName, teacherEmai) VALUES (?, ?, ?)";
            // Check if all values are passed to the input 
            if (!idTeacher || !name || !email) {
                return res.send({
                    status: 400,
                    message: "Missing variable (check idTeacher, name, email)"
                })
            }

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
                message: "Check syntax under the try block (line 58)"
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
            let sql = "INSERT INTO students (idStudentTeacher, studentName, studentEmail) VALUES (?, ?, ?)";
            if (!idTeacher || !name || !email) {
                return res.send({
                    status: 400,
                    message: "Missing variable (check idTeacher, name, email)"
                })
            }

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
        } catch (err) {
            res.send({
                status: 400,
                message: "Check syntax under the try block (line 99)"
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
            let sql = "INSERT INTO subject (idSubjectTeacher, subjectCode, subjectName) VALUES (?, ?, ?)";
            if (!idTeacher || !name || !subjectCode) {
                return res.send({
                    status: 400,
                    message: "Missing variable (check idTeacher, name, subjectCode)"
                })
            }
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
        } catch (err) {
            res.send({
                status: 400,
                message: "Check syntax under the try block (line 138)"
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
            let sql = "INSERT INTO class (idClassTeacher, classCode, name) VALUES (?, ?, ?)";
            if (!idTeacher || !classCode || !name) {
                return res.send({
                    status: 400,
                    message: "Missing variable (check idTeacher, classCode, name)"
                })
            }
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
        } catch (err) {
            res.send({
                status: 400,
                message: "Check syntax under the try block (line 176)"
            })
        }
    } else {
        // Input data is not related to (teacher, students, subject or class)
        res.send({
            status: 400,
            message: "Invalid data (Neither teacher, students, subject or class)"
        })
    }
})

module.exports = router