const db = require('../../connection')

function subjectPut(idTeacher, name, subjectCode, callback) {

    let sql = `UPDATE subject SET idSubjectTeacher = ?,subjectCode = ?, subjectName = ? WHERE idSubjectTeacher = ${idTeacher};`

    db.query(sql, [idTeacher, subjectCode, name], (err, results) => {
        if (err) {
            return callback({
                status: 400,
                message: "Invalid syntax (line 7)"
            })
        }
        return callback({
            status: 204,
            message: "Updated subject"
        })
    })

}



module.exports = subjectPut