const db = require('../../connection')

function student(idTeacher, name, email, callback) {

    let sql = "INSERT INTO students (idStudentTeacher, studentName, studentEmail) VALUES (?, ?, ?)";

    db.query(sql, [idTeacher, name, email], (err, result) => {
        if (err) {
            return callback({
                status: 400,
                message: "Invalid syntax (sql) / Multiple data"
            })
        }
        return callback({
            status: 204,
            message: {
                result,
                update: "Added students data"
            }
        })
    })
}

module.exports = student