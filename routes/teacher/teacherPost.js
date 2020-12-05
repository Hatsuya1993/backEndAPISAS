const db = require('../../connection')


function teacher(idTeacher, name, email, callback) {

        let sql = "INSERT INTO teacher (idTeacher, teacherName, teacherEmail) VALUES (?, ?, ?)";
        
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
                    update: "Added teacher data"
                }
            })
        })
}



module.exports = teacher