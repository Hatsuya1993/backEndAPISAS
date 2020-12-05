const db = require('../../connection')

function subject(idTeacher, name, subjectCode, callback) {

    let sql = "INSERT INTO subject (idSubjectTeacher, subjectName, subjectCode) VALUES (?, ?, ?)";

    db.query(sql, [idTeacher, name, subjectCode], (err, result) => {
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
                update: "Added subject data"
            }
        })
    })
}


module.exports = subject