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

            }
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
        })
        // Catch for any syntax error under the try block
    } catch (err) {
        res.send({
            status: 400,
            message: "Check syntax under the try block (line 9)"
        })
    }

})

module.exports = router