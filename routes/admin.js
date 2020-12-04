const express = require('express')
const router = express.Router()
const db = require('../connection')

let numberOfClass = 0

router.get('/api/reports/workload', (req, res) => {
    try {
        let sqlReport = 'SELECT teacher.idTeacher, teacher.teacherName, subject.subjectCode, subject.subjectName, class.idClassTeacher, teacher.idTeacher FROM teacher JOIN subject ON teacher.idTeacher = subject.idSubjectTeacher JOIN class ON teacher.idTeacher = class.idClassTeacher;'
        db.query(sqlReport, (err, results) => {
            if (err) {
                throw err
            } else {
                let countClass = "SELECT idClassTeacher, COUNT(*) AS 'Number of class' FROM class GROUP BY idClassTeacher;"
                db.query(countClass, (err, classResults) =>{
                if (err){
                    throw err
                }
                {
                    res.send({results,classResults}).status(204)
                }})
            }
        })
    } catch (err) {
        res.send(err).status(500)
    }
})

router.post('/api/register', (req, res) => {
    if (req.body.teacher) {
        let teacherID = req.body.teacher.idTeacher
        let teacherName = req.body.teacher.name
        let teacherEmail = req.body.teacher.email
        let sql = "INSERT INTO teacher (idTeacher, teacherName, teacherEmail) VALUES (?, ?, ?)";
        try {
            db.query(sql, [teacherID, teacherName, teacherEmail], (err, result) => {
                console.log("Added teacher data")
                res.send(result).status(204)
            })
        } catch (err) {
            res.send(err).status(400)
        }
    } else if (req.body.students) {
        let teacherToStudentID = req.body.students.idTeacher
        let studentsName = req.body.students.name
        let studentsEmail = req.body.students.email
        let sql = "INSERT INTO students (idStudentTeacher, studentName, studentEmail) VALUES (?, ?, ?)";
        try {
            db.query(sql, [teacherToStudentID, studentsName, studentsEmail], (err, result) => {
                console.log("Added student data")
                res.send(result).status(204)
            })
        } catch (err) {
            res.send(err).status(400)
        }
    } else if (req.body.subject) {
        let teacherToSubjectID = req.body.subject.idTeacher
        let subjectCode = req.body.subject.subjectCode
        let subjectName = req.body.subject.name
        let sql = "INSERT INTO subject (idSubjectTeacher, subjectCode, subjectName) VALUES (?, ?, ?)";
        try {
            db.query(sql, [teacherToSubjectID, subjectCode, subjectName], (err, result) => {
                console.log("Added subject data")
                res.send(result).status(204)
            })
        } catch (err) {
            res.send(err).status(400)
        }
    } else if (req.body.class) {
        let teacherToSubjectID = req.body.class.idTeacher
        let classCode = req.body.class.classCode
        let className = req.body.class.name
        let sql = "INSERT INTO class (idClassTeacher, classCode, name) VALUES (?, ?, ?, ?)";
        try {
            db.query(sql, [teacherToSubjectID, classCode, className, ], (err, result) => {
                console.log("Added class data")
                res.send(result).status(204)
            })
        } catch (err) {
            res.send(err).status(400)
        }
    } else {
        res.send("Invalid data").status(500)
    }
})

module.exports = router