const db = require('../../connection')

function teacherPut(idTeacher, name, email, callback) {

    let sql = `UPDATE teacher SET idTeacher = ?,teacherName = ?, teacherEmail = ? WHERE idTeacher = ${idTeacher};`

    db.query(sql, [idTeacher, name, email], (err, results) => {
        if (err) {
            return callback({
                status: 400,
                message: "Invalid syntax (line 7)"
            })
        }
        return callback({
            status: 204,
            message: "Updated teacher"
        })
    })

}

module.exports = teacherPut