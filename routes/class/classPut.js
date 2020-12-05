const db = require('../../connection')

function classPut(idTeacher, name, classCode, callback) {

    let sql = `UPDATE class SET idClassTeacher = ?, classCode = ?,  name = ? WHERE idClassTeacher = ${idTeacher};`

    db.query(sql,  [idTeacher, name, classCode], (err, results) => {
        if (err) {
            return callback({
                status: 400,
                message: "Invalid syntax (line 7)"
            })
        }
        return callback({
            status: 204,
            message: "Updated class"
        })
    })

}


module.exports = classPut