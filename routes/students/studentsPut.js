const db = require('../../connection')

function studentsPut(idTeacher, name, email, callback) {

    let sql = `UPDATE students SET idStudentTeacher = ?,studentName = ?, studentEmail = ? WHERE idStudentTeacher = ${idTeacher};`

    db.query(sql, [idTeacher, name, email], (err, results) => {
        if (err) {
            return callback({
                status: 400,
                message: "Invalid syntax (line 7)"
            })
        }
        return callback({
            status: 204,
            message: "Updated students"
        })
    })

}



module.exports = studentsPut